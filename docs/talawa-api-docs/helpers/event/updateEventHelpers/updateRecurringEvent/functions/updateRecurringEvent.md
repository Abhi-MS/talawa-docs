[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/updateEventHelpers/updateRecurringEvent](../README.md) / updateRecurringEvent

# Function: updateRecurringEvent()

\> **updateRecurringEvent**(`args`, `event`, `session`): `Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

This function updates a recurring event based on the provided arguments.

## Parameters

### args

[`MutationUpdateEventArgs`](../../../../../types/generatedGraphQLTypes/type-aliases/MutationUpdateEventArgs.md)

The arguments containing data for updating the event.

### event

[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)

The event to be updated.

### session

`ClientSession`

The Mongoose client session for database transactions.

## Returns

`Promise`\<[`InterfaceEvent`](../../../../../models/Event/interfaces/InterfaceEvent.md)\>

The updated event object.

## Defined in

[src/helpers/event/updateEventHelpers/updateRecurringEvent.ts:20](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/helpers/event/updateEventHelpers/updateRecurringEvent.ts#L20)
