[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Query/usersConnection](../README.md) / usersConnection

# Variable: usersConnection

\> `const` **usersConnection**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"usersConnection"`\]

This query will fetch all the users in a specified order to paginate from the database.

## Param

## Param

An object that contains relevant data to execute the query.

## Returns

An object that contains list of the users.

## Remarks

Connection in graphQL means pagination,
learn more about Connection [here](https://relay.dev/graphql/connections.htm).

## Defined in

[src/resolvers/Query/usersConnection.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/790ab2939a7c80eb0ff31afd318f8889a001f225/src/resolvers/Query/usersConnection.ts#L16)
