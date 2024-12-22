[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [components/SecuredRoute/SecuredRoute](../README.md) / default

# Function: default()

\> **default**(): `Element`

A route guard that checks if the user is logged in and has the necessary permissions.

If the user is logged in and has an admin role set, it renders the child routes.
Otherwise, it redirects to the home page or shows a 404 page if admin role is not set.

## Returns

`Element`

The JSX element representing the secured route.

## Defined in

[src/components/SecuredRoute/SecuredRoute.tsx:16](https://github.com/PalisadoesFoundation/talawa-admin/blob/ec91a82db6f7a7a061fbb4ea9639f2bff335faa5/src/components/SecuredRoute/SecuredRoute.tsx#L16)
