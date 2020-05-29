import Slider from "../components/slider";

export default {
  name: 'technicalSkill',
  title: 'Technical Skill',
  type: 'document',
  fields: [
    { name: 'skillName', type: 'string', title: 'Skill' },
    { name: 'skillLevel', type: 'number', title: 'Skill level',
      inputComponent: Slider,
      options: {
        range: { min: 0, max: 100, step: 1 }
      }
    },
    {
      name: 'skillType',
      type: 'array',
      title: 'Skill type',
      of: [
        { type: 'string' }
      ],
      options: {
        list: [
          { title: 'Languages', value: 'frontEnd' },
          { title: 'Frameworks / Libraries', value: 'frameworks' },
          { title: 'Others', value: 'others' },
        ]
      }
    },
  ]
}