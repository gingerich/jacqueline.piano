export default {
    backend: {
        name: 'git-gateway',
        branch: 'master',
      },
      collections: [
        {
          name: "blog",
          label: "Blog",
          folder: "_posts/blog",
          create: true,
          slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
          fields: [
            {label: "Layout", name: "layout", widget: "hidden", default: "blog"},
            {label: "Title", name: "title", widget: "string"},
            {label: "Publish Date", name: "date", widget: "datetime"},
            {label: "Featured Image", name: "thumbnail", widget: "image"},
            {label: "Rating (scale of 1-5)", name: "rating", widget: "number"},
            {label: "Body", name: "body", widget: "markdown"},
          ]
        }
      ]
}