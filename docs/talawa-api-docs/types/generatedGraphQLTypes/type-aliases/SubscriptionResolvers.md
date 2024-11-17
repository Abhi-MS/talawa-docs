[**talawa-api**](../../../README.md) • **Docs**

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / SubscriptionResolvers

# Type Alias: SubscriptionResolvers\<ContextType, ParentType\>

\> **SubscriptionResolvers**\<`ContextType`, `ParentType`\>: `object`

## Type Parameters

• **ContextType** = `any`

• **ParentType** *extends* [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Subscription"`\] = [`ResolversParentTypes`](ResolversParentTypes.md)\[`"Subscription"`\]

## Type declaration

### messageSentToChat?

\> `optional` **messageSentToChat**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"ChatMessage"`\]\>, `"messageSentToChat"`, `ParentType`, `ContextType`, [`RequireFields`](RequireFields.md)\<[`SubscriptionMessageSentToChatArgs`](SubscriptionMessageSentToChatArgs.md), `"userId"`\>\>

### onPluginUpdate?

\> `optional` **onPluginUpdate**: [`SubscriptionResolver`](SubscriptionResolver.md)\<[`Maybe`](Maybe.md)\<[`ResolversTypes`](ResolversTypes.md)\[`"Plugin"`\]\>, `"onPluginUpdate"`, `ParentType`, `ContextType`\>

## Defined in

[src/types/generatedGraphQLTypes.ts:4856](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/types/generatedGraphQLTypes.ts#L4856)
