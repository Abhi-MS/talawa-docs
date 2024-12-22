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

[src/resolvers/Event/organization.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Event/organization.ts#L16)
