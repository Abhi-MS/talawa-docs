[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/login](../README.md) / login

# Variable: login

\> `const` **login**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"login"`\]

This function enables login. (note: only works when using the last resort SuperAdmin credentials)

## Param

parent of current request

## Param

payload provided with the request

## Remarks

The following checks are done:
1. If the user exists
2. If the password is valid

## Returns

Updated user

## Defined in

[src/resolvers/Mutation/login.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/f4877b986932181336f42a7336754de05976cd97/src/resolvers/Mutation/login.ts#L25)
