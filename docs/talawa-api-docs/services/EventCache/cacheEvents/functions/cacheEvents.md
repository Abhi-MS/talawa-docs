[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [services/EventCache/cacheEvents](../README.md) / cacheEvents

# Function: cacheEvents()

\> **cacheEvents**(`events`): `Promise`\<`void`\>

Stores events in Redis cache with a specified time-to-live (TTL).

## Parameters

• **events**: [`InterfaceEvent`](../../../../models/Event/interfaces/InterfaceEvent.md)[]

Array of events to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/EventCache/cacheEvents.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/services/EventCache/cacheEvents.ts#L10)
