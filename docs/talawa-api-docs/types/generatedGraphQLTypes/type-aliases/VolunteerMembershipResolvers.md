[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / VolunteerMembershipResolvers

# Type Alias: VolunteerMembershipResolvers\<ContextType, ParentType\>

\> **VolunteerMembershipResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"VolunteerMembership"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"VolunteerMembership"`\]

## Type declaration

### \_\_isTypeOf?

\> `optional` **\_\_isTypeOf**: [`IsTypeOfResolverFn`](IsTypeOfResolverFn.md)\<`ParentType`, `ContextType`\>

### \_id?

\> `optional` **\_id**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ID"`\], `ParentType`, `ContextType`\>

### createdAt?

\> `optional` **createdAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### createdBy?

\> `optional` **createdBy**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\]\>, `ParentType`, `ContextType`\>

### event?

\> `optional` **event**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Event"`\], `ParentType`, `ContextType`\>

### group?

\> `optional` **group**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventVolunteerGroup"`\]\>, `ParentType`, `ContextType`\>

### status?

\> `optional` **status**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"String"`\], `ParentType`, `ContextType`\>

### updatedAt?

\> `optional` **updatedAt**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"DateTime"`\], `ParentType`, `ContextType`\>

### updatedBy?

\> `optional` **updatedBy**: [`Resolver`](Resolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"User"`\]\>, `ParentType`, `ContextType`\>

### volunteer?

\> `optional` **volunteer**: [`Resolver`](Resolver.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"EventVolunteer"`\], `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:5098](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/types/generatedGraphQLTypes.ts#L5098)
