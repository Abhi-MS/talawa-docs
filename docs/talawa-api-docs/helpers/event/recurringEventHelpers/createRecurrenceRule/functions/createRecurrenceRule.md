[**talawa-api**](../../../../../README.md) • **Docs**

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/createRecurrenceRule](../README.md) / createRecurrenceRule

# Function: createRecurrenceRule()

\> **createRecurrenceRule**(`recurrenceRuleString`, `recurrenceStartDate`, `recurrenceEndDate`, `organizationId`, `baseRecurringEventId`, `latestInstanceDate`, `session`): `Promise`\<[`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)\>

Creates a recurrence rule document based on the provided parameters.

## Parameters

• **recurrenceRuleString**: `string`

The string representation of the recurrence rule (RRULE).

• **recurrenceStartDate**: `Date`

The start date of recurrence.

• **recurrenceEndDate**: `null` \| `Date`

The end date of recurrence, if specified.

• **organizationId**: `string`

The unique identifier of the organization to which the recurrence rule belongs.

• **baseRecurringEventId**: `string`

The ID of the base recurring event this rule is associated with.

• **latestInstanceDate**: `Date`

The start date of the last instance generated during this operation.

• **session**: `ClientSession`

The MongoDB client session for transactional operations.

## Returns

`Promise`\<[`InterfaceRecurrenceRule`](../../../../../models/RecurrenceRule/interfaces/InterfaceRecurrenceRule.md)\>

The created recurrence rule document.

## Remarks

This function performs the following steps:
1. Parses the recurrenceRuleString into an rrule object using rrule string.
2. Extracts relevant fields from the rrule object such as frequency, weekdays, interval, etc.
3. Creates a new RecurrenceRule document in the database with the extracted fields.

## Defined in

[src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts:26](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/helpers/event/recurringEventHelpers/createRecurrenceRule.ts#L26)
