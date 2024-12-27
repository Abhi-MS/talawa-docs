[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of an `Event`.

This function retrieves the organization associated with a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the organization it is associated with.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the event.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/organization.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Event/organization.ts#L16)
