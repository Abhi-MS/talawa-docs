[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Event/actionItems](../README.md) / actionItems

# Variable: actionItems

\> `const` **actionItems**: [`EventResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/EventResolvers.md)\[`"actionItems"`\]

Resolver function for the `actionItems` field of an `Event`.

This function retrieves the action items associated with a specific event.

## Param

The parent object representing the event. It contains information about the event, including the ID of the action items associated with it.

## Returns

A promise that resolves to an array of action item documents found in the database. These documents represent the action items associated with the event.

## See

 - ActionItem - The ActionItem model used to interact with the action items collection in the database.
 - EventResolvers - The type definition for the resolvers of the Event fields.

## Defined in

[src/resolvers/Event/actionItems.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Event/actionItems.ts#L16)
