[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/blockedUsers](../README.md) / blockedUsers

# Variable: blockedUsers

\> `const` **blockedUsers**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"blockedUsers"`\]

Resolver function for the `blockedUsers` field of an `Organization`.

This function retrieves the users who are blocked by a specific organization.

## Param

The parent object representing the organization. It contains information about the organization, including the IDs of the users who are blocked.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are blocked by the organization.

## See

 - User - The User model used to interact with the users collection in the database.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/blockedUsers.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Organization/blockedUsers.ts#L16)
