## Get types from Swagger API

npm i swagger-typescript-api
npx swagger-typescript-api -p https://ercworldmarketplace20230223141409.azurewebsites.net/swagger/v1/swagger.json -o ./src/types -n swagger.d.ts

## OR codegen

java -jar swagger-codegen-cli.jar generate -i swagger.json -l typescript-fetch -o ./output

## Combined with React-query hooks and types

npm i react-query
npm i -g rapini
download openapi.yaml

rapini react-query -p openapi.yaml --output-dir ./src/hooks/react-query-api-hooks
