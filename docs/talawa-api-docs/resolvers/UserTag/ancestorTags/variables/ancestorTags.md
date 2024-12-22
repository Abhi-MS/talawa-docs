[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/UserTag/ancestorTags](../README.md) / ancestorTags

# Variable: ancestorTags

\> `const` **ancestorTags**: [`UserTagResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/UserTagResolvers.md)\[`"ancestorTags"`\]

Resolver function for the `ancestorTags` field of an `OrganizationTagUser`.

This function retrieves the ancestor tags of a specific organization user tag by recursively finding
each parent tag until the root tag (where parentTagId is null) is reached. It then reverses the order,
appends the current tag at the end, and returns the final array of tags.

## Param

The parent object representing the user tag. It contains information about the tag, including its ID and parentTagId.

## Returns

A promise that resolves to the ordered array of ancestor tag documents found in the database.

## Defined in

[src/resolvers/UserTag/ancestorTags.ts:15](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/resolvers/UserTag/ancestorTags.ts#L15)
