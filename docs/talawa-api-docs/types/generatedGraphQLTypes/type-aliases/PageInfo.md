[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / PageInfo

# Type Alias: PageInfo

\> **PageInfo**: `object`

Information about pagination in a connection.

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"PageInfo"`

### currPageNo?

\> `optional` **currPageNo**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### hasNextPage

\> **hasNextPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

When paginating forwards, are there more items?

### hasPreviousPage

\> **hasPreviousPage**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

When paginating backwards, are there more items?

### nextPageNo?

\> `optional` **nextPageNo**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### prevPageNo?

\> `optional` **prevPageNo**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

### totalPages?

\> `optional` **totalPages**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"Int"`\]\[`"output"`\]\>

## Defined in

[src/types/generatedGraphQLTypes.ts:2153](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/types/generatedGraphQLTypes.ts#L2153)
