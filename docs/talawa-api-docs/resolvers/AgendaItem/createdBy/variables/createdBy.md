[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/createdBy](../README.md) / createdBy

# Variable: createdBy

\> `const` **createdBy**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"createdBy"`\]

Resolver function for the `createdBy` field of an `AgendaItem`.

This function retrieves the user who created a specific agenda item.
It uses the `createdBy` field from the parent `AgendaItem` object to find the corresponding user in the database.
The user details are then returned as a plain JavaScript object.

## Param

The parent `AgendaItem` object. This contains the `createdBy` field, which is used to query the user.

## Returns

A promise that resolves to the user object found in the database, or `null` if no user is found.

## Defined in

[src/resolvers/AgendaItem/createdBy.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/AgendaItem/createdBy.ts#L16)
