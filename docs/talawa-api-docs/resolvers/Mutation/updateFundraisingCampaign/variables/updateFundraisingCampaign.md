[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateFundraisingCampaign](../README.md) / updateFundraisingCampaign

# Variable: updateFundraisingCampaign

\> `const` **updateFundraisingCampaign**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateFundraisingCampaign"`\]

This function enables to update a fundraising campaign.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists.
2. If the FundraisingCampaign exists.
3. If the user is authorized to update the fundraising campaign.
4. If the fundraising campaign already exists with the same name.
5. If the start date is valid.
6. If the end date is valid.

## Returns

Updated campaign.

## Defined in

[src/resolvers/Mutation/updateFundraisingCampaign.ts:42](https://github.com/PalisadoesFoundation/talawa-api/blob/832d310bae30bd8cb45fb1b44f62dd776dccc52f/src/resolvers/Mutation/updateFundraisingCampaign.ts#L42)
