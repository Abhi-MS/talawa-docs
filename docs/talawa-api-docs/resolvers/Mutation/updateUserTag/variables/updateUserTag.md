[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/updateUserTag](../README.md) / updateUserTag

# Variable: updateUserTag

\> `const` **updateUserTag**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"updateUserTag"`\]

Updates an existing tag's name based on provided input, including validation and authorization checks.

This function updates the name of an existing tag in the database. It performs various checks to ensure that the current user is authorized to update the tag, validates that the new tag name is not the same as the old one, and ensures that no other tag with the same name exists under the same parent tag. It then updates the tag's name and returns the updated tag.

## Param

This parameter represents the parent resolver in the GraphQL schema and is not used in this function.

## Param

The arguments passed to the GraphQL mutation, including the tag's `id` and the new `name` for the tag.

## Param

Provides contextual information, including the current user's ID. This is used to authenticate and authorize the request.

## Returns

The updated tag with its new name.

## Defined in

[src/resolvers/Mutation/updateUserTag.ts:29](https://github.com/PalisadoesFoundation/talawa-api/blob/6bd0fecc1032af2aa70d925c85724d9fec2350f9/src/resolvers/Mutation/updateUserTag.ts#L29)
