[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/CheckIn/user](../README.md) / user

# Variable: user

\> `const` **user**: [`CheckInResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/CheckInResolvers.md)\[`"user"`\]

Resolver function for the `user` field of a `CheckIn`.

This function retrieves the user who checked in to an event.

## Param

The parent object representing the check-in. It contains information about the check-in, including the ID of the event attendee who checked in.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who checked in to the event.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - CheckInResolvers - The type definition for the resolvers of the CheckIn fields.

## Defined in

[src/resolvers/CheckIn/user.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/CheckIn/user.ts#L16)
