[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/forgotPassword](../README.md) / forgotPassword

# Variable: forgotPassword

\> `const` **forgotPassword**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"forgotPassword"`\]

This function enables a user to restore password.

## Param

parent of current request

## Param

payload provided with the request

## Remarks

The following tasks are done:
1. Extracts email and otp out of otpToken.
2. Compares otpToken and otp.
3. Checks whether otp is valid.
4. Updates password field for user's document with email === email.

## Returns

True if the operation is successful.

## Defined in

[src/resolvers/Mutation/forgotPassword.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Mutation/forgotPassword.ts#L23)
