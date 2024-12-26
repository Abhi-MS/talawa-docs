[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Organization/userTags](../README.md) / userTags

# Variable: userTags

\> `const` **userTags**: [`OrganizationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/OrganizationResolvers.md)\[`"userTags"`\]

Resolver function for the `userTags` field of an `Organization`.

This resolver is used to resolve the `userTags` field of an `Organization` type.

## Param

The parent object representing the organization. It contains information about the organization, including the ID of the organization.

## Param

The arguments provided to the field. These arguments are used to filter, sort, and paginate the user tags.

## Returns

A promise that resolves to a connection object containing the user tags of the organization.

## See

 - OrganizationTagUser - The OrganizationTagUser model used to interact with the user tags collection in the database.
 - parseGraphQLConnectionArguments - The function used to parse the GraphQL connection arguments (filter, sort, pagination).
 - transformToDefaultGraphQLConnection - The function used to transform the list of user tags into a connection object.
 - getCommonGraphQLConnectionFilter - The function used to get the common filter object for the GraphQL connection.
 - getCommonGraphQLConnectionSort - The function used to get the common sort object for the GraphQL connection.
 - MAXIMUM_FETCH_LIMIT - The maximum number of user tags that can be fetched in a single request.
 - GraphQLError - The error class used to throw GraphQL errors.
 - OrganizationResolvers - The type definition for the resolvers of the Organization fields.

## Defined in

[src/resolvers/Organization/userTags.ts:40](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Organization/userTags.ts#L40)
