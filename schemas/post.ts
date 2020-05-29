export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'urlName',
      type: 'string',
      title: 'Url name'
    },
    {
      name: 'series',
      title: 'Post series (optional)',
      type: 'reference',
      to: [{type: 'postSeries'}],
      description: 'A post series this post belong into'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'tag',
      type: 'array',
      title: 'Tag',
      of: [
        {
          type: 'reference',
          validation: Rule => Rule.required(),
          to: [
            { type: 'tag' }
          ],
          weak: true
        },
      ],

    },
    {
      name: 'content',
      type: 'markdown',
      title: 'Content',
      validation: Rule => Rule.required()
    }
  ]
}