[**talawa-admin**](../../../../README.md) • **Docs**

***

[talawa-admin](../../../../modules.md) / [screens/OrganizationFundCampaign/OrganizationFundCampagins](../README.md) / default

# Function: default()

\> **default**(): `Element`

`orgFundCampaign` component displays a list of fundraising campaigns for a specific fund within an organization.
It allows users to search, sort, view and edit campaigns.

### Functionality
- Displays a data grid with campaigns information, including their names, start and end dates, funding goals, and actions.
- Provides search functionality to filter campaigns by name.
- Offers sorting options based on funding goal and end date.
- Opens modals for creating or editing campaigns.

### State
- `campaign`: The current campaign being edited or deleted.
- `searchTerm`: The term used for searching campaigns by name.
- `sortBy`: The current sorting criteria for campaigns.
- `modalState`: An object indicating the visibility of different modals (`same` for create/edit).
- `campaignModalMode`: Determines if the modal is in 'edit' or 'create' mode.

### Methods
- `handleOpenModal(campaign: InterfaceCampaignInfo | null, mode: 'edit' | 'create')`: Opens the modal for creating or editing a campaign.
- `handleClick(campaignId: string)`: Navigates to the pledge details page for a specific campaign.

### GraphQL Queries
- Uses `FUND_CAMPAIGN` query to fetch the list of campaigns based on the provided fund ID, search term, and sorting criteria.

### Rendering
- Renders a `DataGrid` component with campaigns information.
- Displays modals for creating and editing campaigns.
- Shows error and loading states using `Loader` and error message components.

## Returns

`Element`

The rendered component including breadcrumbs, search and filter controls, data grid, and modals.

## Defined in

[src/screens/OrganizationFundCampaign/OrganizationFundCampagins.tsx:77](https://github.com/PalisadoesFoundation/talawa-admin/blob/c49a58cefb47697eb25ed53aa1ef6d685c772d3e/src/screens/OrganizationFundCampaign/OrganizationFundCampagins.tsx#L77)
