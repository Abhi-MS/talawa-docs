[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/messageSentToChat](../README.md) / messageSentToChat

# Variable: messageSentToChat

\> `const` **messageSentToChat**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"messageSentToChat"`\]

This property included a `subscribe` method, which is used to
subscribe the `receiver` and `sender` to receive Chat updates.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

## Defined in

[src/resolvers/Subscription/messageSentToChat.ts:35](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Subscription/messageSentToChat.ts#L35)
