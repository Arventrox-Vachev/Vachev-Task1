This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Storyblok CLI and storyblok-generate-ts

## Storyblok CLI Installation

### Firstly install storyblok CLI

```bash

npm i storyblok -g

```

### then login to storyblok using the CLI

```bash

storyblok login

```

## Generate types from storyblok components

### First install storyblok-generate-ts

```bash

npm install -D storyblok-generate-ts

```

### Run the pull command with the storyblok CLI to download your space's components schema as json (Replace 000000 with the Space ID from Storyblok which is in Settings/Space)</br> **you must be logged in from the CLI !**

```bash

storyblok pull-components --space 000000

```

- It will create a json file containing the space's components. with the name components.SpaceID.json in the root of the project folder.

### Run the generate-sb-types command which will generate the space's components types ready for usage

- Replace the 000000 with the Space ID from Storyblok which is in Settings/Space

```bash

storyblok-generate-ts source=./components.000000.json target=./component-types-sb

```

### Combined command to generate the space's components and their types

- It also moves the components.json file to src/data/content and generates the components types file in /src/types just change the zero's to the Space ID of the space

```bash

"generate-sb-types": "storyblok pull-components --space 000000 && storyblok-generate-ts source=./components.000000.json target=./src/types/component-types-sb && move components.000000.json src/data/content/",

```

## CLU usage for syncing content and components between 2 spaces

### Syncing components from the project's components file to Production Space

- **You must be logged in to storyblok from the CLI and have generated the component's file mentioned above**
- **Change the 000000 to the target Production Space ID and the source to your project's components file source**

```bash

storyblok push-components --space 000000 ./src/data/content/components.228570.json

```

### Syncing components from the Staging Space to Production Space

```bash

 storyblok sync --type components --source ReplaceWithStagingSpaceID --target ReplaceWithProdSpaceID


```

### Syncing stories from the Production Space to Staging Space

It is used to sync the field values from the Production to the Staging Space.

```bash

 storyblok sync --type stories --source ReplaceWithProdSpaceID --target ReplaceWithStagingSpaceID


```
