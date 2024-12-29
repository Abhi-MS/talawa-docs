[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/AgendaItem/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`AgendaItemResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/AgendaItemResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of an `AgendaItem`.

This function retrieves the organization associated with a specific agenda item.

## Param

The parent object representing the agenda item. It contains information about the agenda item, including the ID of the organization it is associated with.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the agenda item.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - AgendaItemResolvers - The type definition for the resolvers of the AgendaItem fields.

## Defined in

[src/resolvers/AgendaItem/organization.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/AgendaItem/organization.ts#L18)
