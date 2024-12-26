[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of an `Event`.

This function retrieves the user who created a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the event.

## See

 - User - The User model used to interact with the users collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/creator.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Event/creator.ts#L16)
