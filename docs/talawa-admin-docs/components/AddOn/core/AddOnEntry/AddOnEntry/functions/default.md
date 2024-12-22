[**talawa-admin**](../../../../../../README.md) • **Docs**

***

[talawa-admin](../../../../../../modules.md) / [components/AddOn/core/AddOnEntry/AddOnEntry](../README.md) / default

# Function: default()

\> **default**(`props`): `JSX.Element`

A React component that represents an add-on entry, displaying its details and allowing installation or uninstallation.

## Parameters

• **props**: `InterfaceAddOnEntryProps`

The properties for the component.

## Returns

`JSX.Element`

A JSX element containing the add-on entry.

## Example

```tsx
\<AddOnEntry
  id="1"
  enabled=\{true\}
  title="Sample Add-On"
  description="This is a sample add-on."
  createdBy="Author Name"
  component="SampleComponent"
  modified=\{new Date()\}
  uninstalledOrgs=\{['org1', 'org2']\}
  getInstalledPlugins=\{() =\> \{\}\}
/\>
```

## Defined in

[src/components/AddOn/core/AddOnEntry/AddOnEntry.tsx:46](https://github.com/PalisadoesFoundation/talawa-admin/blob/ec91a82db6f7a7a061fbb4ea9639f2bff335faa5/src/components/AddOn/core/AddOnEntry/AddOnEntry.tsx#L46)
