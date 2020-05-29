import { FiTag } from 'react-icons/fi';

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