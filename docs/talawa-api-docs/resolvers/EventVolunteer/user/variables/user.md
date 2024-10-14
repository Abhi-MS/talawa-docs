[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/EventVolunteer/user](../README.md) / user

# Variable: user

\> `const` **user**: [`EventVolunteerResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventVolunteerResolvers.md)\[`"user"`\]

Resolver function for the `user` field of an `EventVolunteer`.

This function retrieves the user who created a specific event volunteer.

## Param

The parent object representing the event volunteer. It contains information about the event volunteer, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the event volunteer.

## See

 - User - The User model used to interact with the users collection in the database.
 - EventVolunteerResolvers - The type definition for the resolvers of the EventVolunteer fields.

## Defined in

[src/resolvers/EventVolunteer/user.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f9e8275b1ddff2d3edcec79ee3b37c07998f6cc3/src/resolvers/EventVolunteer/user.ts#L16)
