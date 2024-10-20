[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Event/attendeesCheckInStatus](../README.md) / attendeesCheckInStatus

# Variable: attendeesCheckInStatus

\> `const` **attendeesCheckInStatus**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"attendeesCheckInStatus"`\]

Resolver function for the `attendeesCheckInStatus` field of an `Event`.

This function retrieves the attendees of an event and their check-in status.

## Param

The parent object representing the event. It contains information about the event, including the ID.

## Returns

A promise that resolves to an array of objects. Each object contains information about an attendee of the event, including the user document and the check-in document.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/attendeesCheckInStatus.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Event/attendeesCheckInStatus.ts#L16)
