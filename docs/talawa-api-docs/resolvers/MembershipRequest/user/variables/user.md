[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/MembershipRequest/user](../README.md) / user

# Variable: user

\> `const` **user**: [`MembershipRequestResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MembershipRequestResolvers.md)\[`"user"`\]

Resolver function for the `user` field of a `MembershipRequest`.

This function retrieves the user who made a specific membership request.

## Param

The parent object representing the membership request. It contains information about the membership request, including the ID of the user who made it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who made the membership request.

## See

 - User - The User model used to interact with the users collection in the database.
 - MembershipRequestResolvers - The type definition for the resolvers of the MembershipRequest fields.

## Defined in

[src/resolvers/MembershipRequest/user.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/MembershipRequest/user.ts#L18)
