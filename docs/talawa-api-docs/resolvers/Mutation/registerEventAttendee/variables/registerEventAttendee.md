[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/registerEventAttendee](../README.md) / registerEventAttendee

# Variable: registerEventAttendee

\> `const` **registerEventAttendee**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"registerEventAttendee"`\]

Registers an attendee for an event.

This function handles the registration process for an attendee to participate in an event.
It checks the user's authorization, verifies the event's existence, and manages the registration status
based on whether the user was invited or directly registered.

## Param

The parent resolver.

## Param

Arguments passed to the resolver containing registration data.

## Param

Context object containing user authentication and request information.

## Returns

Promise\<object\> Returns a promise resolving to the registered attendee data.

## Throws

NotFoundError Throws a NotFoundError if the user or event is not found.

## Throws

UnauthorizedError Throws an UnauthorizedError if the current user is not authorized to register attendees.

## Defined in

[src/resolvers/Mutation/registerEventAttendee.ts:38](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Mutation/registerEventAttendee.ts#L38)
