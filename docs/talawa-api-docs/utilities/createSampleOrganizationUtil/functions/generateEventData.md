[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/createSampleOrganizationUtil](../README.md) / generateEventData

# Function: generateEventData()

\> **generateEventData**(`users`, `organizationId`): `Promise`\<[`InterfaceEvent`](../../../models/Event/interfaces/InterfaceEvent.md)\>

Generates event data for a given list of users and organization.

## Parameters

### users

[`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)[]

The list of users associated with the event

### organizationId

`string`

The ID of the organization the event belongs to

## Returns

`Promise`\<[`InterfaceEvent`](../../../models/Event/interfaces/InterfaceEvent.md)\>

A promise that resolves to the created event

## Defined in

[src/utilities/createSampleOrganizationUtil.ts:88](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/utilities/createSampleOrganizationUtil.ts#L88)
