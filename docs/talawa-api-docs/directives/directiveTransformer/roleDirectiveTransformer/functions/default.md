[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [directives/directiveTransformer/roleDirectiveTransformer](../README.md) / default

# Function: default()

\> **default**(`schema`, `directiveName`): `GraphQLSchema`

A function to transform a GraphQL schema by adding role-based authorization
logic to the fields with the specified directive.

## Parameters

• **schema**: `GraphQLSchema`

The original GraphQL schema to be transformed.

• **directiveName**: `string`

The name of the directive that will trigger the transformation.

## Returns

`GraphQLSchema`

A new GraphQL schema with the role-based authorization logic applied.

## See

Parent File:
- `src/index.ts`

## Example

```ts
const transformedSchema = roleDirectiveTransformer(originalSchema, 'role');
```

## Defined in

[src/directives/directiveTransformer/roleDirectiveTransformer.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/4a88fe62b20ebda9653c55ae8d39d6c6fac8831f/src/directives/directiveTransformer/roleDirectiveTransformer.ts#L24)
