[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / DateTimeScalarConfig

# Interface: DateTimeScalarConfig

## Extends

- `GraphQLScalarTypeConfig`\<[`ResolversTypes`](../type-aliases/ResolversTypes.md)\[`"DateTime"`\], `any`\>

## Properties

### astNode?

\> `optional` **astNode**: `Maybe`\<`ScalarTypeDefinitionNode`\>

#### Inherited from

`GraphQLScalarTypeConfig.astNode`

#### Defined in

node\_modules/graphql/type/definition.d.ts:369

***

### description?

\> `optional` **description**: `Maybe`\<`string`\>

#### Inherited from

`GraphQLScalarTypeConfig.description`

#### Defined in

node\_modules/graphql/type/definition.d.ts:360

***

### extensionASTNodes?

\> `optional` **extensionASTNodes**: `Maybe`\<readonly `ScalarTypeExtensionNode`[]\>

#### Inherited from

`GraphQLScalarTypeConfig.extensionASTNodes`

#### Defined in

node\_modules/graphql/type/definition.d.ts:370

***

### extensions?

\> `optional` **extensions**: `Maybe`\<`Readonly`\<`GraphQLScalarTypeExtensions`\>\>

#### Inherited from

`GraphQLScalarTypeConfig.extensions`

#### Defined in

node\_modules/graphql/type/definition.d.ts:368

***

### name

\> **name**: `"DateTime"`

#### Overrides

`GraphQLScalarTypeConfig.name`

#### Defined in

[src/types/generatedGraphQLTypes.ts:4240](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/types/generatedGraphQLTypes.ts#L4240)

***

### parseLiteral?

\> `optional` **parseLiteral**: `GraphQLScalarLiteralParser`\<`any`\>

Parses an externally provided literal value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseLiteral`

#### Defined in

node\_modules/graphql/type/definition.d.ts:367

***

### parseValue?

\> `optional` **parseValue**: `GraphQLScalarValueParser`\<`any`\>

Parses an externally provided value to use as an input.

#### Inherited from

`GraphQLScalarTypeConfig.parseValue`

#### Defined in

node\_modules/graphql/type/definition.d.ts:365

***

### serialize?

\> `optional` **serialize**: `GraphQLScalarSerializer`\<`any`\>

Serializes an internal value to include in a response.

#### Inherited from

`GraphQLScalarTypeConfig.serialize`

#### Defined in

node\_modules/graphql/type/definition.d.ts:363

***

### specifiedByURL?

\> `optional` **specifiedByURL**: `Maybe`\<`string`\>

#### Inherited from

`GraphQLScalarTypeConfig.specifiedByURL`

#### Defined in

node\_modules/graphql/type/definition.d.ts:361
