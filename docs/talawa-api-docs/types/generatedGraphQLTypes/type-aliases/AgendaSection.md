[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AgendaSection

# Type Alias: AgendaSection

\> **AgendaSection**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"AgendaSection"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]

### createdBy?

\> `optional` **createdBy**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### description

\> **description**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### items?

\> `optional` **items**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`AgendaItem`](AgendaItem.md)\>[]\>

### relatedEvent?

\> `optional` **relatedEvent**: [`Maybe`](Maybe.md)\<[`Event`](Event.md)\>

### sequence

\> **sequence**: [`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]

### updatedAt?

\> `optional` **updatedAt**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]\>

### updatedBy?

\> `optional` **updatedBy**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

## Defined in

[src/types/generatedGraphQLTypes.ts:213](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/types/generatedGraphQLTypes.ts#L213)
