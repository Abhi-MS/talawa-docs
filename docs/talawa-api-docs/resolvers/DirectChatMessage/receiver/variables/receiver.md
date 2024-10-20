[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/DirectChatMessage/receiver](../README.md) / receiver

# Variable: receiver

\> `const` **receiver**: [`DirectChatMessageResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/DirectChatMessageResolvers.md)\[`"receiver"`\]

Resolver function for the `receiver` field of a `DirectChatMessage`.

This function retrieves the user who received a specific direct chat message.

## Param

The parent object representing the direct chat message. It contains information about the direct chat message, including the ID of the user who received it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who received the direct chat message.

## See

 - User - The User model used to interact with the users collection in the database.
 - DirectChatMessageResolvers - The type definition for the resolvers of the DirectChatMessage fields.

## Defined in

[src/resolvers/DirectChatMessage/receiver.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/DirectChatMessage/receiver.ts#L18)
