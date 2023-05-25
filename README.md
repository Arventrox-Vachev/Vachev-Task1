## Get types from Swagger API

# Swagger combined with React-query hooks and types using Rapini

## Install packages

```bash

npm i -g rapini

```

and

```bash

npm i react-query

```

## Generate hooks with types

### From project

- file can be yaml or json

```bash

rapini react-query -p file --output-dir ./src/hooks/react-query-api-hooks

```

### From swagger

```bash

rapini react-query -p https://petstore3.swagger.io/api/v3/openapi.json --output-dir ./src/hooks/react-query-api-hooks
`
```
