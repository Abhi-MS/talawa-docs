[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeOrganizationImage](../README.md) / removeOrganizationImage

# Variable: removeOrganizationImage

\> `const` **removeOrganizationImage**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeOrganizationImage"`\]

This function enables to remove an organization's image.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the organization exists
3. If the user is the admin of the organization.

## Defined in

[src/resolvers/Mutation/removeOrganizationImage.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/d0c167bb942c4778fba221c2cdd27665fc7dbf61/src/resolvers/Mutation/removeOrganizationImage.ts#L23)
