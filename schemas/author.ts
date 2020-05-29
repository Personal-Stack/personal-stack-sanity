  
export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Author name',
      type: 'string',
    },
    {
      name: 'presentation',
      type: 'array',
      title: 'Author presentation',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'authorPicture',
      title: 'Author picture',
      type: 'image',
    },
  ]
}