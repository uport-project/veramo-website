---
id: cli_manage_gh_pages_did_web
title: Create a did:web using Github Pages
sidebar_label: Create a DID using Github
---

Let's create a `DID` using the `did:web` method and GitHub Pages.
GitHub offers an easy and free way of hosting static pages, which is perfect for our use case. We will use this to host
a DID document, which in the case of `did:web` is a simple JSON file.

## Create a GitHub repository

First, we need to create a GitHub repository. For this tutorial we will use `alice` for the name of the repository.
You have to enable the GitHub pages feature for this repository. You can do this by going to the `Settings` tab of the
repository.

## Create an empty DID document

GitHub pages will serve the `did.json` file from the root of the repository. We will create a `did.json` file with an
id. The default GitHub pages domain is `<your github user>.github.io/<reppository name>`. So, since we chose the
name `alice` for the repository, the `did.json` file should initially look like this:

```json
{
  "id": "did:web:<your github user>.github.io:alice"
}
```

Once you put this in the root of the repository you can commit and push it to GitHub.
Check that the file is available at `https://<your github user>.github.io/alice/did.json`.

## Resolve the DID

The most basic DID document is a JSON with the `id` property set to the DID itself. This is enough for the DID to be
resolvable. Now we can use the [Veramo CLI tool](../veramo_agent/cli_tool) to resolve the DID.

```bash
veramo did resolve did:web:<your github user>.github.io:alice
```

This DID is not very useful as it doesn't have any public keys or services. We will use the Veramo CLI tool to create
these and then sign a document.

## Create a DID

```bash
veramo did create
```

This will prompt you to select a DID method. Select `did:web` and for the alias
enter `<your github user>:github.io:alice`. The current version of the CLI tool (5.x) uses the alias to determine the
DID for a `did:web`.

## Get the new DID document

The Veramo CLI tool includes a server that can be used to host your DID documents for the `did:web` identifiers you
create. These DID documents are automatically updated when you add new keys or services to the DID.
But, since we're using GitHub Pages, we'll have to update the `did.json` file manually.
We will use the server to get the DID document and then update the `did.json` file.

To start the server run:

```bash
veramo server
```

You should see something like this printed:

```bash
📨 Messaging endpoint http://localhost:3332/messaging
Listening to route: http://localhost:3332/messaging
Listening to route: http://localhost:3332/agent
Listening to route: http://localhost:3332/open-api.json
Listening to route: http://localhost:3332/api-docs
🚀 Cloud Agent ready at http://localhost:3332
```

Now, you can get the DID document by making a `GET` request to `http://localhost:3332/alice/did.json`.
BUT, since the server is designed to serve multiple DID documents, it needs to know which one you want to get.
The way it does this is by looking at the hostname that is being requested.
You will be hosting this document on `<your github user>.github.io`, so you need to set the `Host` header before sending
the request.

```bash
curl -o did.json -H "Host: <your github user>.github.io" http://localhost:3332/alice/did.json
```

This will create a DID document that the server has for this DID. Now you can post this to GitHub.

```bash
git add did.json
git commit -m "Add did.json"
git push
```

Check that the file is available at `https://<your github user>.github.io/alice/did.json`.

## Resolve the DID

Now you can resolve the DID again and see that it has the public key and service that you added.

```bash
veramo did resolve did:web:<your github user>.github.io:alice
```

## Add a service endpoint

You can add a service endpoint to the DID document by using the `veramo did add-service` command.

```bash
veramo did add-service
```

You will be prompted with a list of your DIDs. Select the `did:web` DID that you created earlier.
Then you will be prompted to select a service type. Type `DIDCommMessaging` (or just press enter as it is the default).
Then for the service endpoint enter `http://localhost:3332/messaging`.
And for the ID enter `did:web:<your github handle>.github.io:alice#messaging-local` (or just `#messaging-local`).

Then export the did.json again and upload it to GitHub:

```bash
curl -o did.json -H "Host: <your github user>.github.io" http://localhost:3332/alice/did.json
git add did.json
git commit -m "Add service endpoint"
git push
```

After the update is deployed you can check that the service endpoint is included in the DID document.

```bash
veramo did resolve did:web:<your github user>.github.io:alice
```

## What's in your DID document now?

The DID document you created and updated should now contain a public key and a service endpoint.
The public key was added automatically when you created the `did:web`.
The service endpoint you added can be used to receive messages sent to the localhost. This is obviously meant for
testing as it is not accessible from the internet.
If you want to receive messages from anywhere, you can use a service like [ngrok](https://ngrok.com) to expose your
localhost to the internet, use a mediator service to relay messages, or obviously host your Veramo agent behind a public
URL. In these cases, the service endpoint you add to your DID document should be the public URL of your agent.

## Sign a credential

Now that you have a DID document with a public key, you can use it to sign a document.
The Veramo CLI tool includes a command to sign a credential.

```bash
veramo credential create
```

This will start a demo flow where you can select a DID, enter a credential subject, and then sign the credential.
There's a more elaborate explanation of this flow in the [verifiable credential tutorial](./cli_create_vc).
