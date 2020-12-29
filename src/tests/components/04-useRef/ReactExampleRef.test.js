const { shallow } = require('enzyme')
const {
  default: ReactExampleRef
} = require('../../../components/04-useRef/ReactExampleRef')

describe('Pruebas sobre <ReactExampleRef/>', () => {
  const wrapper = shallow(<ReactExampleRef />)
  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)
  })

  test('debe mostrar el componente <MultipleCustomHooks/>', () => {
    const wrapper = shallow(<ReactExampleRef />)

    wrapper.find('button').simulate('click')
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)
  })
})
