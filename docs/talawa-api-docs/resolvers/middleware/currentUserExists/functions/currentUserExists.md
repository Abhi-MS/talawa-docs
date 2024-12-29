[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/middleware/currentUserExists](../README.md) / currentUserExists

# Function: currentUserExists()

\> **currentUserExists**(): (`next`) =\> (`root`, `args`, `context`, `info`) =\> `Promise`\<`any`\>

Middleware function to check if the current user exists in the database.

This function is used to check if the user making a request to the server exists in the database.
If the user does not exist, the function throws an error.

## Returns

`Function`

The result of the next function in the resolver chain.

### Parameters

#### next

(`root`, `args`, `context`, `info`) =\> `any`

### Returns

`Function`

#### Parameters

##### root

`any`

##### args

`any`

##### context

###### userId

`any`

##### info

`any`

#### Returns

`Promise`\<`any`\>

## See

 - User - The User model used to interact with the users collection in the database.
 - USER_NOT_FOUND_ERROR - The error message to display when the user is not found.
 - errors - The library used to create custom errors in the application.

## Defined in

[src/resolvers/middleware/currentUserExists.ts:21](https://github.com/PalisadoesFoundation/talawa-api/blob/3a5276aff43f5de4f7fab3ec9683a420dcdc7a06/src/resolvers/middleware/currentUserExists.ts#L21)
