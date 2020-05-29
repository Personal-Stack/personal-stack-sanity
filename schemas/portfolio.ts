export default {
  name: 'portfolio',
  title: 'Portfolio / CV',
  type: 'document',
  fields: [
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'array',
      of: [
        {
          type: 'block'
        }
      ]
    },
    {
      name: 'technicalSkills',
      type: 'array',
      title: 'Technical skills',
      of: [
        {
          type: 'reference',
          to: {
            type: 'technicalSkill',
          },
        },
      ],
    },
    {
      name: 'personalSkill',
      type: 'array',
      title: 'Personal skill',
      of: [
        {
          type: 'string'
        }
      ]
    },
    {
      name: 'position',
      type: 'array',
      title: 'Position',
      of: [
        {
          type: 'position'
        }
      ],
    },
    {
      name: 'education',
      type: 'array',
      title: 'Education',
      of: [
        {
          type: 'education'
        }
      ],
    }
  ]
}