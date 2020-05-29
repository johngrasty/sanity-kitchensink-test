export default {
  title: 'Menu Branch',
  name: 'menuBranch',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Page',
      description:
          'The content item assigned to this branch item. This page is shown if the user clicks on the branch name. Uses the first child item if no page is assigned, e.g. forwarding the user.',
      name: 'menuItem',
      type: 'reference',
      to: [{type: 'page'}]
    },
    {
      title: 'Menu Items',
      description: 'Submenus',
      name: 'children',
      type: 'array',
      of: [
        {type: 'cta'}
        // { type: 'menuBranch' } // Allow menuBranches for infinite recursiveness. Breaks GraphQL though.
      ],
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: '',
      media: ''
    },
    prepare (selection) {
      return {
        ...selection,
        subtitle: 'Menu Branch'
      }
    }
  }
}
