[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/RecurrenceRule/organization](../README.md) / organization

# Variable: organization

\> `const` **organization**: [`RecurrenceRuleResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/RecurrenceRuleResolvers.md)\[`"organization"`\]

Resolver function for the `organization` field of a `RecurrenceRule`.

This function retrieves the organization associated with a specific recurrence rule.

## Param

The parent object representing the recurrence rule. It contains information about the recurrence rule, including the ID of the organization associated with it.

## Returns

A promise that resolves to the organization document found in the database. This document represents the organization associated with the recurrence rule.

## See

 - Organization - The Organization model used to interact with the organizations collection in the database.
 - RecurrenceRuleResolvers - The type definition for the resolvers of the RecurrenceRule fields.

## Defined in

[src/resolvers/RecurrenceRule/organization.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/RecurrenceRule/organization.ts#L17)
