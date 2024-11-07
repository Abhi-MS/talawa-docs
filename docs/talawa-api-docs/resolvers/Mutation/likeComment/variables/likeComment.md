[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/likeComment](../README.md) / likeComment

# Variable: likeComment

\> `const` **likeComment**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"likeComment"`\]

This function enables to like a post.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the post exists
3. If the user has already liked the post.

## Returns

Post without the like

## Defined in

[src/resolvers/Mutation/likeComment.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/Mutation/likeComment.ts#L18)
