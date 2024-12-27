[**talawa-api**](../../../../../README.md)

***

[talawa-api](../../../../../modules.md) / [helpers/event/recurringEventHelpers/generateRecurrenceRuleString](../README.md) / generateRecurrenceRuleString

# Function: generateRecurrenceRuleString()

\> **generateRecurrenceRuleString**(`recurrenceRuleData`): `string`

Generates a recurrence rule (RRULE) string based on the provided recurrence rule input.

## Parameters

### recurrenceRuleData

[`RecurrenceRuleInput`](../../../../../types/generatedGraphQLTypes/type-aliases/RecurrenceRuleInput.md)

The input data defining the recurrence rule.

## Returns

`string`

The generated recurrence rule string suitable for creating a valid RRULE object.

## Remarks

This function performs the following steps:
1. Extracts relevant fields from the recurrenceRuleData such as start date, end date, frequency, weekdays, interval, count, and week day occurrence in month.
2. Converts start and end dates to string format suitable for RRULE properties.
3. Constructs the RRULE string based on the extracted fields, using standard RRULE syntax.

## Defined in

[src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/helpers/event/recurringEventHelpers/generateRecurrenceRuleString.ts#L15)
