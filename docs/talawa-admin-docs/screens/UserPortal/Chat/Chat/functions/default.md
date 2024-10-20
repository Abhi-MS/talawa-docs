[**talawa-admin**](../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../modules.md) / [screens/UserPortal/Chat/Chat](../README.md) / default

# Function: default()

\> **default**(): `JSX.Element`

The `chat` component provides a user interface for interacting with contacts and chat rooms within an organization.
It features a contact list with search functionality and displays the chat room for the selected contact.
The component uses GraphQL to fetch and manage contact data, and React state to handle user interactions.

## Features:
- **Search Contacts:** Allows users to search for contacts by their first name.
- **Contact List:** Displays a list of contacts with their details and a profile image.
- **Chat Room:** Shows the chat room for the selected contact.

## GraphQL Queries:
- `ORGANIZATIONS_MEMBER_CONNECTION_LIST`: Fetches a list of members within an organization, with optional filtering based on the first name.

## Event Handlers:
- `handleSearch`: Updates the filterName state and refetches the contact data based on the search query.
- `handleSearchByEnter`: Handles search input when the Enter key is pressed.
- `handleSearchByBtnClick`: Handles search input when the search button is clicked.

## Rendering:
- Displays a search input field and a search button for filtering contacts.
- Shows a list of contacts with their details and profile images.
- Renders a chat room component for the selected contact.
- Displays a loading indicator while contact data is being fetched.

## Returns

`JSX.Element`

The rendered `chat` component.

## Defined in

[src/screens/UserPortal/Chat/Chat.tsx:55](https://github.com/PalisadoesFoundation/talawa-admin/blob/7496bb3a4c3730e7e3caee73f8bf91c3031e4ae6/src/screens/UserPortal/Chat/Chat.tsx#L55)
