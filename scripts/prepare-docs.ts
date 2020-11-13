import { resolve } from 'path'
import { existsSync, readdirSync, copyFileSync, mkdirSync, unlinkSync } from 'fs'
const outputFolder = './temp'
const inputFolders = [
  '../daf/packages/daf-core/api/',
  '../daf/packages/daf-did-comm/api/',
  '../daf/packages/daf-did-jwt/api/',
  '../daf/packages/daf-ethr-did/api/',
  '../daf/packages/daf-express/api/',
  '../daf/packages/daf-libsodium/api/',
  '../daf/packages/daf-resolver/api/',
  '../daf/packages/daf-resolver-universal/api/',
  '../daf/packages/daf-rest/api/',
  '../daf/packages/daf-selective-disclosure/api/',
  '../daf/packages/daf-typeorm/api/',
  '../daf/packages/daf-url/api/',
  '../daf/packages/daf-w3c/api/',
  '../daf/packages/daf-web-did/api/',
  '../daf/packages/daf-key-manager/api/',
  '../daf/packages/daf-identity-manager/api/',
  '../daf/packages/daf-message-handler/api/',
]

if (!existsSync(resolve(outputFolder))) {
  console.log('Creating', outputFolder)
  mkdirSync(resolve(outputFolder))
} else {
  console.log('Removing files in', outputFolder)
  readdirSync(resolve(outputFolder)).forEach(file => { 
    unlinkSync(resolve(outputFolder, file))
  })
}

for (const inputFolder of inputFolders) {
  readdirSync(resolve(inputFolder)).forEach(file => { 
    console.log('Copying', resolve(outputFolder, file))
    copyFileSync(resolve(inputFolder, file), resolve(outputFolder, file))
  }) 
}