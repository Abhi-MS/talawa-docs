[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [components/UserPortal/SecuredRouteForUser/SecuredRouteForUser](../README.md) / default

# Function: default()

\> **default**(): `Element`

A component that guards routes by checking if the user is logged in.
If the user is logged in and does not have 'AdminFor' set, the child routes are rendered.
If the user is not logged in, they are redirected to the homepage.
If the user is logged in but has 'AdminFor' set, a 404 page is shown.

## Returns

`Element`

JSX.Element - Rendered component based on user authentication and role.

## Defined in

[src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx:14](https://github.com/PalisadoesFoundation/talawa-admin/blob/4bef0939e3fab4672bfd3599312195b8557e01a3/src/components/UserPortal/SecuredRouteForUser/SecuredRouteForUser.tsx#L14)
