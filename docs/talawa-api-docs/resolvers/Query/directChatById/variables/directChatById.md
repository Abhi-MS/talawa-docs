[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/directChatById](../README.md) / directChatById

# Variable: directChatById

\> `const` **directChatById**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"directChatById"`\]

This query will fetch all messages for a certain direct chat for the user from database.

## Param

## Param

An object that contains `id` of the direct chat.

## Returns

A `directChatsMessages` object that holds all of the messages from the specified direct chat.
If the `directChatsMessages` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/directChatById.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Query/directChatById.ts#L16)
