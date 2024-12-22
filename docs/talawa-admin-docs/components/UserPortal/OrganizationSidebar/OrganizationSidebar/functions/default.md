[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [components/UserPortal/OrganizationSidebar/OrganizationSidebar](../README.md) / default

# Function: default()

\> **default**(): `JSX.Element`

OrganizationSidebar displays the sidebar for an organization, showing a list of members and events.

This component fetches and displays:
- The top 3 members of the organization with their images and names.
- The top 3 upcoming events for the organization with their titles, start, and end dates.

It includes:
- A link to view all members.
- A link to view all events.

The sidebar handles loading states and displays appropriate messages while data is being fetched.

## Returns

`JSX.Element`

JSX.Element representing the organization sidebar.

## Defined in

[src/components/UserPortal/OrganizationSidebar/OrganizationSidebar.tsx:36](https://github.com/PalisadoesFoundation/talawa-admin/blob/ec91a82db6f7a7a061fbb4ea9639f2bff335faa5/src/components/UserPortal/OrganizationSidebar/OrganizationSidebar.tsx#L36)
