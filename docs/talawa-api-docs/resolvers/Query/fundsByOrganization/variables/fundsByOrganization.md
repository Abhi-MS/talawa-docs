[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/fundsByOrganization](../README.md) / fundsByOrganization

# Variable: fundsByOrganization

\> `const` **fundsByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"fundsByOrganization"`\]

Retrieves funds associated with a specific organization based on the provided query parameters.

This function performs the following steps:
1. Builds a query filter (`where`) and sorting parameters based on the provided arguments.
2. Queries the database for funds associated with the specified organization ID and matching the filter criteria.
3. Sorts the results based on the provided sorting order.

## Param

This parameter is not used in this resolver function.

## Param

The arguments provided by the GraphQL query, including the organization ID (`organizationId`), filter criteria (`where`), and sorting order (`orderBy`).

## Returns

A list of funds associated with the specified organization, matching the filter and sorting criteria.

## Defined in

[src/resolvers/Query/fundsByOrganization.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Query/fundsByOrganization.ts#L20)
