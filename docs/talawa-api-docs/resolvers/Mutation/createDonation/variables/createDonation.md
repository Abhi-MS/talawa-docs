[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/createDonation](../README.md) / createDonation

# Variable: createDonation

\> `const` **createDonation**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"createDonation"`\]

Creates a new donation transaction.

This function performs the following actions:
1. Creates a new donation record in the database with the specified details.

## Param

The parent object for the mutation. This parameter is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `amount`: The amount of the donation.
  - `nameOfOrg`: The name of the organization receiving the donation.
  - `nameOfUser`: The name of the user making the donation.
  - `orgId`: The ID of the organization receiving the donation.
  - `payPalId`: The PayPal ID associated with the transaction.
  - `userId`: The ID of the user making the donation.

## Param

The context for the mutation, which is not used in this resolver.

## Returns

The created donation record.

## Defined in

[src/resolvers/Mutation/createDonation.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/a6e7ac91b581c9109559657faf0f934f3eb41fe7/src/resolvers/Mutation/createDonation.ts#L23)
