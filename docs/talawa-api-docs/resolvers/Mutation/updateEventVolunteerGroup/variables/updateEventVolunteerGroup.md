[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateEventVolunteerGroup](../README.md) / updateEventVolunteerGroup

# Variable: updateEventVolunteerGroup

\> `const` **updateEventVolunteerGroup**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateEventVolunteerGroup"`\]

This function enables to update the Event Volunteer Group

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. Whether the user exists
2. Whether the EventVolunteerGroup exists
3. Whether the current user is the leader of EventVolunteerGroup

## Defined in

[src/resolvers/Mutation/updateEventVolunteerGroup.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Mutation/updateEventVolunteerGroup.ts#L22)
