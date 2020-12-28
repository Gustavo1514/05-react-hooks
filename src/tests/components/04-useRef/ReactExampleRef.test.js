const { shallow } = require('enzyme')
const {
  default: MultipleCustomHooks
} = require('../../../components/03-examples/MultipleCustomHooks')

describe('Pruebas sobre <ReactExampleRef/>', () => {
  test('debe mostrarse correctamente', () => {
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe mostrar el componente < MultipleCustomHooks/>', () => {})
})
