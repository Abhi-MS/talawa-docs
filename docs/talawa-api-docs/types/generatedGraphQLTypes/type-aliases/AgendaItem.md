[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / AgendaItem

# Type Alias: AgendaItem

> **AgendaItem**: `object`

## Type declaration

### \_\_typename?

> `optional` **\_\_typename**: `"AgendaItem"`

### \_id

> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### attachments?

> `optional` **attachments**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>[]\>

### categories?

> `optional` **categories**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`AgendaCategory`](AgendaCategory.md)\>[]\>

### createdAt

> **createdAt**: [`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]

### createdBy

> **createdBy**: [`User`](User.md)

### description?

> `optional` **description**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### duration

> **duration**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### organization

> **organization**: [`Organization`](Organization.md)

### relatedEvent?

> `optional` **relatedEvent**: [`Maybe`](Maybe.md)\<[`Event`](Event.md)\>

### sequence

> **sequence**: [`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]

### title

> **title**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### updatedAt

> **updatedAt**: [`Scalars`](Scalars.md)\[`"Date"`\]\[`"output"`\]

### updatedBy

> **updatedBy**: [`User`](User.md)

### urls?

> `optional` **urls**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>[]\>

### users?

> `optional` **users**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`User`](User.md)\>[]\>

## Defined in

[src/types/generatedGraphQLTypes.ts:178](https://github.com/PalisadoesFoundation/talawa-api/blob/3bacbf38707ebd3e3e5f1bc5b4cc7aa3b2adc169/src/types/generatedGraphQLTypes.ts#L178)
