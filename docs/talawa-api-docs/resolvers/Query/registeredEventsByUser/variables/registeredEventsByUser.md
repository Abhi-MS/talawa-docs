[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/registeredEventsByUser](../README.md) / registeredEventsByUser

# Variable: registeredEventsByUser

\> `const` **registeredEventsByUser**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"registeredEventsByUser"`\]

This query will fetch all the events for which user registered from the database.

## Param

## Param

An object that contains `id` of the user and `orderBy`.

## Returns

An object that contains the Event data.

## Remarks

The query function uses `getSort()` function to sort the data in specified.

## Defined in

[src/resolvers/Query/registeredEventsByUser.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Query/registeredEventsByUser.ts#L12)
