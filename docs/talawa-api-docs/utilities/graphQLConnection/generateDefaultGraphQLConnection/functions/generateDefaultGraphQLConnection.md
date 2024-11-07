[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/generateDefaultGraphQLConnection](../README.md) / generateDefaultGraphQLConnection

# Function: generateDefaultGraphQLConnection()

\> **generateDefaultGraphQLConnection**\<`T0`\>(): [`DefaultGraphQLConnection`](../type-aliases/DefaultGraphQLConnection.md)\<`T0`\>

This is a factory function to create a base graphql connection object with default fields
that correspond to a connection with no data and no traversal properties in any direction.

## Type Parameters

• **T0**

## Returns

[`DefaultGraphQLConnection`](../type-aliases/DefaultGraphQLConnection.md)\<`T0`\>

## Example

```ts
const connection = generateDefaultGraphQLConnection();
```

## Defined in

[src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/utilities/graphQLConnection/generateDefaultGraphQLConnection.ts#L30)
