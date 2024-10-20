[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/directChatsByUserID](../README.md) / directChatsByUserID

# Variable: directChatsByUserID

\> `const` **directChatsByUserID**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"directChatsByUserID"`\]

This query will fetch all the Direct chats for the current user from the database.

## Param

## Param

An object that contains `id` of the user.

## Returns

An object `directChats` that contains all direct chats of the current user.
If the `directChats` object is null then it throws `NotFoundError` error.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/directChatsByUserID.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Query/directChatsByUserID.ts#L13)
