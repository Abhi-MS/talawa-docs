[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/actionItemCategories](../README.md) / actionItemCategories

# Variable: actionItemCategories

\> `const` **actionItemCategories**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"actionItemCategories"`\]

Resolver function for the `actionItemCategories` field of an `Organization`.

This function retrieves the action item categories related to a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Returns

A promise that resolves to the action item category documents found in the database. These documents represent the action item categories related to the organization.

## See

 - ActionItemCategory - The ActionItemCategory model used to interact with the action item categories collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/actionItemCategories.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4a88fe62b20ebda9653c55ae8d39d6c6fac8831f/src/resolvers/Organization/actionItemCategories.ts#L16)
