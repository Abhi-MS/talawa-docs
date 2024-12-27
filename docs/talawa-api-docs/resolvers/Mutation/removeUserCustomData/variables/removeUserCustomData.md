[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/removeUserCustomData](../README.md) / removeUserCustomData

# Variable: removeUserCustomData

\> `const` **removeUserCustomData**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"removeUserCustomData"`\]

Removes custom data associated with the current user within a specified organization.

This function allows an authorized user, such as an organization admin or super admin, to remove custom data associated with the user within a specific organization. The function first verifies the user's identity and authorization, then proceeds to delete the custom data if it exists.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL mutation, including the `organizationId` for which the custom data should be removed.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

The removed custom data object if the operation was successful.

## Defined in

[src/resolvers/Mutation/removeUserCustomData.ts:30](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Mutation/removeUserCustomData.ts#L30)
