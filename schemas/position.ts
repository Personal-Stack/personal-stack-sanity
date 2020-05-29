export default {
  name: 'position',
  title: 'Position',
  type: 'object',
  fields: [
    { name: 'positionCompany', type: 'string', title: 'Company name' },
    { name: 'positionTitle', type: 'string', title: 'Position title' },
    { name: 'positionDateStart', type: 'date', title: 'Position start date' },
    { name: 'positionDateEnd', type: 'date', title: 'Position end date' },
    { name: 'positionDescription', type: 'array', title: 'Position description', of: [{ type: 'block' }] },
  ]
}