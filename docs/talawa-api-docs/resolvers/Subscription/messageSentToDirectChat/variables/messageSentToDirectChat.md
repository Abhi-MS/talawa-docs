[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Subscription/messageSentToDirectChat](../README.md) / messageSentToDirectChat

# Variable: messageSentToDirectChat

\> `const` **messageSentToDirectChat**: [`SubscriptionResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/SubscriptionResolvers.md)\[`"messageSentToDirectChat"`\]

This property included a `subscribe` method, which is used to
subscribe the `receiver` and `sender` to receive Direct Chat updates.

## Remarks

To control updates on a per-client basis, the function uses the `withFilter`
method imported from `apollo-server-express` module.
You can learn about `subscription` [here](https://www.apollographql.com/docs/apollo-server/data/subscriptions/).

## Defined in

[src/resolvers/Subscription/messageSentToDirectChat.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Subscription/messageSentToDirectChat.ts#L27)
