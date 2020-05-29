export default {
  name: 'technicalSkill',
  title: 'Technical Skill',
  type: 'object',
  fields: [
    { name: 'skillName', type: 'string', title: 'Skill' },
    {
      name: 'skillType',
      type: 'array',
      title: 'Skill type',
      of: [
        { type: 'string' }
      ],
      options: {
        list: [
          { title: 'Front end', value: 'frontEnd' },
          { title: 'Back end', value: 'backEnd' },
          { title: 'Mobile', value: 'mobile' },
          { title: 'DevOps', value: 'devOps' },
          { title: 'OS', value: 'os' },
          { title: 'Others', value: 'others' },
        ]
      }
    },
  ]
}