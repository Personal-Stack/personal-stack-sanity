export default {
  name: 'position',
  title: 'Position',
  type: 'object',
  fields: [
    { name: 'positionTitle', type: 'string', title: 'Position title' },
    { name: 'positionDateStart', type: 'date', title: 'Position start date' },
    { name: 'positionDateEnd', type: 'date', title: 'Position end date' },
    { name: 'position', type: 'array', title: 'Position', of: [{ type: 'block' }] },
  ]
}