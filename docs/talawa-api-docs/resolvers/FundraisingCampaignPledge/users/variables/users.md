[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/FundraisingCampaignPledge/users](../README.md) / users

# Variable: users

\> `const` **users**: [`FundraisingCampaignPledgeResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/FundraisingCampaignPledgeResolvers.md)\[`"users"`\]

Resolver function for the `users` field of a `FundraisingCampaignPledge`.

This function retrieves the users who pledged to donate to a specific fundraising campaign.

## Param

The parent object representing the fundraising campaign pledge. It contains information about the fundraising campaign pledge, including the IDs of the users who pledged to donate.

## Returns

A promise that resolves to an array of user documents found in the database. These documents represent the users who pledged to donate to the fundraising campaign.

## See

 - User - The User model used to interact with the users collection in the database.
 - FundraisingCampaignPledgeResolvers - The type definition for the resolvers of the FundraisingCampaignPledge fields.

## Defined in

[src/resolvers/FundraisingCampaignPledge/users.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/bba5d82264abb62b9e358a3d3fe1af18a8a8f6e4/src/resolvers/FundraisingCampaignPledge/users.ts#L16)
