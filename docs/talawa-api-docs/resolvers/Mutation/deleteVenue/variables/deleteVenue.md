[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/deleteVenue](../README.md) / deleteVenue

# Variable: deleteVenue

\> `const` **deleteVenue**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"deleteVenue"`\]

This function enables to create a venue in an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the organization exists
3. Whether the user is admin or superadmin or not
4. If the venue exists

## Returns

Deleted venue

## Defined in

[src/resolvers/Mutation/deleteVenue.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Mutation/deleteVenue.ts#L30)
