#!/bin/bash
export RESOURCE_GROUP='architecture-center-dev-rg'
export TAGS='env=development'
export COSMOS_DB_NAME='architecture-center-db'
export DATABASE_NAME='wipkanban'
export USERS_COLLECTION='users'
export CONTAINER_REGISTRY='architectureCenterDev'
export CONTAINER_NAMESPACE='architecturecenterdev'
export WORKSPACE_ANALYTICS='architecture-center-wa'
export REGION='EastUs'
export APPINSIGHTS_NAME='architecture-center-dev-apinsights'

# resource group
az group create --name $RESOURCE_GROUP  --location $REGION --tags $TAGS
# az group delete --name $RESOURCE_GROUP

# cosmos db
az cosmosdb create --name $COSMOS_DB_NAME --resource-group $RESOURCE_GROUP --kind MongoDB

az cosmosdb mongodb database create -a $COSMOS_DB_NAME -g $RESOURCE_GROUP -n $DATABASE_NAME

az cosmosdb mongodb collection create \
    -a $COSMOS_DB_NAME \
    -g $RESOURCE_GROUP \
    -d $DATABASE_NAME \
    -n $USERS_COLLECTION \
    --shard 'email'

#container registry
az acr create --resource-group $RESOURCE_GROUP --name $CONTAINER_REGISTRY --sku Basic --no-wait
az acr login --name $CONTAINER_REGISTRY

#application insights
az monitor log-analytics workspace create -g $RESOURCE_GROUP -n $WORKSPACE_ANALYTICS
az extension add -n application-insights

az monitor app-insights component create --app $APPINSIGHTS_NAME \
--location $REGION --kind web -g $RESOURCE_GROUP --application-type web --workspace $WORKSPACE_ANALYTICS

az monitor app-insights component show -a $APPINSIGHTS_NAME --resource-group $RESOURCE_GROUP --query instrumentationKey -o tsv

docker build -t $CONTAINER_NAMESPACE.azurecr.io/backend:1.0 -f docker/Dockerfile .

docker push architecturecenterdev.azurecr.io/backend:1.0

#app service
az deployment group create \
--name deployment-ac \
--resource-group $RESOURCE_GROUP \
--template-file azure/template.json \
--parameters azure/parameters.json