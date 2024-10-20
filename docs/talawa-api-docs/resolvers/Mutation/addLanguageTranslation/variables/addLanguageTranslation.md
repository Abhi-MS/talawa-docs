[**talawa-api**](../../../../README.md) • **Docs**

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/addLanguageTranslation](../README.md) / addLanguageTranslation

# Variable: addLanguageTranslation

\> `const` **addLanguageTranslation**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"addLanguageTranslation"`\]

Mutation resolver function to add a translation for a language.

This function performs the following actions:
1. Checks if the language with the provided English value exists in the database.
2. If the language exists, checks if the translation for the specified language code already exists.
3. If the translation already exists, throws a conflict error.
4. If the translation does not exist, updates the language with the new translation.
5. If the language does not exist, creates a new language entry with the provided translation.

## Param

The parent object for the mutation. Typically, this is not used in this resolver.

## Param

The arguments for the mutation, including:
  - `data.en_value`: The English value of the language to which the translation is being added.
  - `data.translation_lang_code`: The language code for the translation being added.
  - `data.translation_value`: The translation value to be added.

## Returns

A promise that resolves to the updated or newly created language document.

## See

 - Language - The Language model used to interact with the languages collection in the database.
 - MutationResolvers - The type definition for the mutation resolvers.

## Remarks

The function uses the `findOne` method to locate an existing language entry by its English value.
If the language exists, it checks the existing translations to prevent duplicate entries.
If the language does not exist, a nsnew entry is created with the provided tralation.

## Defined in

[src/resolvers/Mutation/addLanguageTranslation.ts:33](https://github.com/PalisadoesFoundation/talawa-api/blob/f1c816bca43cc03a8c1bd303394e2550a50db017/src/resolvers/Mutation/addLanguageTranslation.ts#L33)
