[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateUserRoleInOrganization](../README.md) / updateUserRoleInOrganization

# Variable: updateUserRoleInOrganization

\> `const` **updateUserRoleInOrganization**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateUserRoleInOrganization"`\]

This function enables a SUPERADMIN to change the role of a user in an organization.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Returns

Updated organization.
Only SUPERADMIN & ADMIN of a organization can update the role of a user in an organization.

## Defined in

[src/resolvers/Mutation/updateUserRoleInOrganization.ts:24](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Mutation/updateUserRoleInOrganization.ts#L24)
