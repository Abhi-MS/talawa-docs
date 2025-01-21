const sidebars = {
  docs: [
    "introduction/introduction",
    {
      type: "category",
      label: "Getting Started",
      link: {
        type: "generated-index",
      },
      collapsed: false,
      items: [
        "introduction/about",
        "introduction/setting-up",
        "introduction/core-concepts",
        "introduction/core-concepts-legacy",
        "introduction/roadmap",
      ],
    },

    {
      type: "category",
      label: "Developer Resources",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "developers/technical-introduction",
        "developers/contributing",
        {
          type: "category",
          label: "Talawa API",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/talawa-api/api-overview",
            "developers/talawa-api/api-design-guide",
            "developers/talawa-api/api-error-handling-guide",
            // {
            //   type: "link",
            //   label: "Schema Documentation",
            //   href: "/docs/schema",
            // },
            {
              type: "category",
              label: "Base Constraints",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/talawa-api/constraints/user",
                "developers/talawa-api/constraints/organization",
                "developers/talawa-api/constraints/admin",
              ],
            },
            "developers/talawa-api/mutations",
            "developers/talawa-api/schemas",
            "developers/talawa-api/authentication",
            "developers/talawa-api/functionality",
            "developers/talawa-api/pagination",
            "developers/talawa-api/expectations",
          ],
        },
        {
          type: "category",
          label: "Project 2024",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "developers/project-2024/overview",
            {
              type: "category",
              label: "Chat Notification",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/chat-notification-system/chat_notification_system",
              ],
            },
            {
              type: "category",
              label: "Talawa Event Plugin",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/talawa-event-plugin/talawa_event_plugin",
              ],
            },
            {
              type: "category",
              label: "Tag Management",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/tag-management-system/tag_management_system",
              ],
            },
            {
              type: "category",
              label: "Volunteer Management",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/volunteer-management/volunteer-management",
              ],
            },
            {
              type: "category",
              label: "Improved File Uploads",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/improved-file-upload-and-security/improved-file-upload-and-security",
              ],
            },
            {
              type: "category",
              label: "Event Attendance",
              link: {
                type: "generated-index",
              },
              collapsed: true,
              items: [
                "developers/project-2024/event-attendance/event-attendance",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Requirements Docs",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Existing Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "functionalities/core-functionalities",
            "functionalities/recurring-events",
          ],
        },
        {
          type: "category",
          label: "Desired Features",
          link: {
            type: "generated-index",
          },
          collapsed: true,
          items: [
            "features/features-introduction",
            "features/admin-portal",
            "features/admin-role",
            "features/chat-and-messaging",
            "features/coordinator-role",
            "features/events",
            "features/members",
            "features/donations-and-fees",
            "features/news-feed",
            "features/notifications",
            "features/data-management",
            "features/organizations",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "UI/UX Design",
      link: {
        type: "generated-index",
      },
      collapsed: true,
      items: [
        "design/branding",
        "design/ux/ux-talawa",
        "design/ux/ux-design-system",
      ],
    },
  ],
};

module.exports = sidebars;
