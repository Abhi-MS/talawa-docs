[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Fund/creator](../README.md) / creator

# Variable: creator

\> `const` **creator**: [`FundResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/FundResolvers.md)\[`"creator"`\]

Resolver function for the `creator` field of a `Fund`.

This function retrieves the user who created a specific fund.

## Param

The parent object representing the fund. It contains information about the fund, including the ID of the user who created it.

## Returns

A promise that resolves to the user document found in the database. This document represents the user who created the fund.

## See

 - User - The User model used to interact with the users collection in the database.
 - FundResolvers - The type definition for the resolvers of the Fund fields.

## Defined in

[src/resolvers/Fund/creator.ts:17](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/Fund/creator.ts#L17)
