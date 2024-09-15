[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateOrganization](../README.md) / updateOrganization

# Variable: updateOrganization

\> `const` **updateOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateOrganization"`\]

This function enables to update an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists.
2. The the user is an admin of the organization.

## Defined in

[src/resolvers/Mutation/updateOrganization.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/60937520d7a29ccf883a9c6a7c2d186bae92a81b/src/resolvers/Mutation/updateOrganization.ts#L22)
