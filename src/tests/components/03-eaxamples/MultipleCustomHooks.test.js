const { shallow } = require('enzyme')
const {
  default: MultipleCustomHooks
} = require('../../../components/03-examples/MultipleCustomHooks')
const { useFetch } = require('../../../hooks/useFetch')
const { useCounter } = require('../../../hooks/useCounter')
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')

describe('Pruebas sobre <MultipleCustomHooks/>', () => {
  //   beforeEach(() => {

  //   })
  test('debe mostrarse correctamente ', () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {}
    })
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper).toMatchSnapshot()
  })

  test('debe mostrar la informacion', () => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {}
    })
    useFetch.mockReturnValue({
      data: [
        {
          author: 'Gustav',
          quote: 'Hola Mundo'
        }
      ],
      loading: false,
      error: null
    })
    const wrapper = shallow(<MultipleCustomHooks />)
    expect(wrapper.find('.alert').exists()).toBe(false)
    expect(
      wrapper
        .find('.mb-0')
        .text()
        .trim()
    ).toBe('Hola Mundo')
    expect(
      wrapper
        .find('footer')
        .text()
        .trim()
    ).toBe('Gustav')

    // console.log(wrapper.html())
  })
})
