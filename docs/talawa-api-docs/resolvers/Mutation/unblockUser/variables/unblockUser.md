[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/unblockUser](../README.md) / unblockUser

# Variable: unblockUser

\> `const` **unblockUser**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"unblockUser"`\]

This function enables to unblock user.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the organization exists.
2. If the user exists
3. If the user is an admin of the organization

## Defined in

[src/resolvers/Mutation/unblockUser.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/c952c7a3bfd4b8b910fbae10313f5402ade5a9d4/src/resolvers/Mutation/unblockUser.ts#L27)
