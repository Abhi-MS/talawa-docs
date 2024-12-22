[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/agendaCategories](../README.md) / agendaCategories

# Variable: agendaCategories

\> `const` **agendaCategories**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"agendaCategories"`\]

Resolver function for the `agendaCategories` field of an `Organization`.

This function retrieves the agenda categories of a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Returns

A promise that resolves to an array of agenda category documents found in the database. These documents represent the agenda categories of the organization.

## See

 - AgendaCategoryModel - The AgendaCategory model used to interact with the agendaCategories collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/agendaCategories.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Organization/agendaCategories.ts#L16)
