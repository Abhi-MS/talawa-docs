[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/UserFamily/admins](../README.md) / admins

# Variable: admins

\> `const` **admins**: [`UserFamilyResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserFamilyResolvers.md)\[`"admins"`\]

Resolver function for the `admins` field of a `UserFamily`.

This function retrieves the users who are admins of a specific user family.

## Param

The parent object representing the user family. It contains information about the user family, including the IDs of the users who are admins.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who are admins of the user family.

## See

 - User - The User model used to interact with the users collection in the database.
 - UserFamilyResolvers - The type definition for the resolvers of the UserFamily fields.

## Defined in

[src/resolvers/UserFamily/admins.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4a88fe62b20ebda9653c55ae8d39d6c6fac8831f/src/resolvers/UserFamily/admins.ts#L16)
