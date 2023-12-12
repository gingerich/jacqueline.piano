export default {
  backend: {
    name: 'git-gateway',
    branch: 'basic-pages-collection',
  },
  local_backend: true,
  publish_mode: "editorial_workflow",
  collections: [
    {
      name: "pages",
      label: "Pages",
      files: [
        {
          label: "About Me",
          name: "about",
          file: "src/pages/about.md",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Description", name: "description", widget: "string" },
            { label: "Page Body", name: "body", widget: "markdown" },
          ]
        },
        {
          label: "Contact",
          name: "contact",
          file: "src/pages/contact.md",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Description", name: "description", widget: "string" },
            { label: "Page Body", name: "body", widget: "markdown" },
          ]
        }
      ]
    }
  ]
}