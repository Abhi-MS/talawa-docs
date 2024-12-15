[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/sendMessageToChat](../README.md) / sendMessageToChat

# Variable: sendMessageToChat

\> `const` **sendMessageToChat**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"sendMessageToChat"`\]

This function enables to send message to chat.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the direct chat exists.
2. If the user exists

## Returns

Chat message.

## Defined in

[src/resolvers/Mutation/sendMessageToChat.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Mutation/sendMessageToChat.ts#L15)
