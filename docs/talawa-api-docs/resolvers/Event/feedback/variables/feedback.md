[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/feedback](../README.md) / feedback

# Variable: feedback

\> `const` **feedback**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"feedback"`\]

Resolver function for the `feedback` field of an `Event`.

This function retrieves the feedback associated with a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the feedback associated with it.

## Returns

A promise that resolves to an array of feedback documents found in the database. These documents represent the feedback associated with the event.

## See

 - Feedback - The Feedback model used to interact with the feedback collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/feedback.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/Event/feedback.ts#L16)
