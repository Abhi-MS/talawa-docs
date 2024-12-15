[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ChatMessage

# Type Alias: ChatMessage

\> **ChatMessage**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"ChatMessage"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### chatMessageBelongsTo

\> **chatMessageBelongsTo**: [`Chat`](Chat.md)

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### deletedBy?

\> `optional` **deletedBy**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

### messageContent

\> **messageContent**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### replyTo?

\> `optional` **replyTo**: [`Maybe`](Maybe.md)\<[`ChatMessage`](ChatMessage.md)\>

### sender

\> **sender**: [`User`](User.md)

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

## Defined in

[src/types/generatedGraphQLTypes.ts:290](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/types/generatedGraphQLTypes.ts#L290)
