[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/attendees](../README.md) / attendees

# Variable: attendees

\> `const` **attendees**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"attendees"`\]

Resolver function for the `attendees` field of an `Event`.

This function retrieves the attendees of an event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the event.

## Returns

A promise that resolves to the user documents found in the database. These documents represent the attendees of the event.

## See

 - EventAttendee - The EventAttendee model used to interact with the event attendees collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/attendees.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Event/attendees.ts#L16)
