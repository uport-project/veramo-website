---
id: cli_config
title: Configuration file
sidebar_label: Configuration file
---

## Create configuration

You can use a per-project configuration or specify a configuration file with each command.
If the current folder contains an `agent.yml` configuration file, for every command.

Alternatively, you can specify a config file with each command using the `--config /path/to/your/config.yml` option. This will be used instead of a per-project configuration file.

You can create a configuration file in the current folder by running:

```bash
veramo config create
```

This will create an `agent.yml` file that will get used next time you invoke a CLI command in this folder.
By default, the database files are created in the same folder as the config file.

If you want to connect to a hosted veramo instance you can create a configuration file by running:

```bash
veramo config create --template client
```

Using configuration file:

```bash
# From outside the directory
veramo did create --config ./myagent/agent.yml

# It will detect a local agent.yml file when run from within the myagent directory
veramo did create
```

## How it works internally

Objects are created by a helper function [createObjects](https://github.com/uport-project/veramo/blob/faa7940c515bbd65dfaf9370594794f627099a38/packages/cli/src/lib/objectCreator.ts#L5), which recursively mutates the configuration object that was parsed from a YAML file and applies custom rules for objects containing:

* Module imports

```json
{
  "$require": "path...",
  "$args": {}
}
```

* Object references

```json
{
  "$ref": "/json/pointer",
}
```

* Environment variables

```json
{
  "$env": "ENV_VAR",
}
```





### Requiring npm modules

This:

```typescript
import { Agent } from '@veramo/core'
import { DIDComm } from '@veramo/did-comm'
const agent = new Agent({
  plugins: [
    new DIDComm()
  ]
})
```

is equivalent to:

```typescript
const agent = new (require('@veramo/core'))['Agent']({
  plugins: [
    new (require('@veramo/core'))['DIDComm']()
  ]
})
```

which is equivalent to:

```yaml
agent:
  $require: '@veramo/core#Agent'
  $args:
    - plugins:
        - $require: '@veramo/did-comm#DIDComm'
```

#### `$require` syntax

`ethr-did-resolver?t=function&p=/ethr#getResolver`

 - `ethr-did-resolver` - Module name
 - `t=function` - Optional. Type can be `function`, `object`, `class`. Default is `class`
   - `class` - imported symbol will be initiated with `new symbolName(args)`
   - `function` - imported symbol will be initiated with `symbolName(args)`
   - `object` - imported object will be returned without aditional processing
 - `p=/ethr` - Optional. Pointer to an attribute in imported symbol
 - `#getResolver` - Imported symbol name


```yaml
result:
  $require: 'ethr-did-resolver?t=function&p=/ethr#getResolver'
  $args:
    - networks:
        - name: mainnet
          rpcUrl: https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c
        - name: rinkeby
          rpcUrl: https://rinkeby.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c
```

is equivalent to:

```typescript
import { getResolver } from 'ethr-did-resolver'
const obj = getResolver({
  networks: [
    { 
      name: 'mainnet',
      rpcUrl: 'https://mainnet.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c'
    },
    { 
      name: 'rinkeby',
      rpcUrl: 'https://rinkeby.infura.io/v3/5ffc47f65c4042ce847ef66a3fa70d4c'
    },
  ]
})

const result = obj.ethr
```


### Referencing objects ( `$ref` )


```yaml
agent:
  $require: '@veramo/core#Agent'
  $args:
    - plugins:
        - $require: '@veramo/did-comm#DIDComm'
```

is equivalent to:

```yaml
didComm:
  $require: '@veramo/did-comm#DIDComm'

agent:
  $require: '@veramo/core#Agent'
  $args:
    - plugins:
        - $ref: /didComm
```

By referencing objects you can ensure that only one copy of the object is created in memory and can be shared by different modules. For example the same database connection used by different plugins:


```yaml

dbConnection:
  $require: 'typeorm?t=function#createConnection'
  $args:
    - type: 'sqlite'
      database:
        $env: 'DATABASE_FILE'
      entities:
        $require: '@veramo/data-store?t=object#Entities'
        
agent:
  $require: '@veramo/core#Agent'
  $args:
    - schemaValidation: false
      plugins:
        - $require: '@veramo/data-store#DataStore'
          $args:
            - $ref: /dbConnection
        - $require: '@veramo/data-store#DataStoreORM'
          $args:
            - $ref: /dbConnection        
```
## Server

Example:

```yaml
server:
  baseUrl: 'http://localhost:3332'
  port: '3332'
  
  # Array of express middleware
  use:
    # CORS
    - - $require: 'cors?t=function'

    # Add agent to the request object
    - - $require: '@veramo/remote-server?t=function#RequestWithAgentRouter'
        $args:
          - agent:
              $ref: /agent

  # Execute during server initialization
  init:
    - $require: '@veramo/remote-server?t=function#createDefaultDid'
      $args:
        - agent:
            $ref: /agent
          baseUrl:
            $ref: /constants/baseUrl
          messagingServiceEndpoint: /messaging
```

`server.use` is an array of `expressjs` middleware arrays

`server.init` is an array of functions that need to be run during server initialization
