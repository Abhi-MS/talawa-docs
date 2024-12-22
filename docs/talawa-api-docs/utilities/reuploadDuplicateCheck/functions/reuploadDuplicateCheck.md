[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/reuploadDuplicateCheck](../README.md) / reuploadDuplicateCheck

# Function: reuploadDuplicateCheck()

\> **reuploadDuplicateCheck**(`oldImagePath`, `newImagePath`): `Promise`\<`boolean`\>

Checks if a user or organization is attempting to re-upload the same image.

## Parameters

### oldImagePath

Path of the current image (could be a string, URL request object, or buffer object).

`null` | [`TypeImagePath`](../type-aliases/TypeImagePath.md)

### newImagePath

[`TypeImagePath`](../type-aliases/TypeImagePath.md)

Path of the new image being uploaded (could be a string, URL request object, or buffer object).

## Returns

`Promise`\<`boolean`\>

Promise that resolves to true if the images are identical, false otherwise.

## Remarks

This is a utility method.

## Defined in

[src/utilities/reuploadDuplicateCheck.ts:48](https://github.com/PalisadoesFoundation/talawa-api/blob/039b0f127fb8caa46d57186ab4b3bb27fe150903/src/utilities/reuploadDuplicateCheck.ts#L48)
