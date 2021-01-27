const { mount } = require('enzyme')
const {
  default: LoginScreen
} = require('../../../components/09-useContext/LoginScreen')
const { UserContext } = require('../../../components/09-useContext/UserContext')
const setuser = jest.fn()

describe('Pruebas sobre <LoginScreen/>', () => {
  const wrapper = mount(
    <UserContext.Provider
      value={{
        setuser
      }}
    >
      <LoginScreen />
    </UserContext.Provider>
  )

  test('debe renderizarse correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('debe ejecutar el setuser con el arguento esperado', () => {
    wrapper.find('button').simulate('click')
    expect(setuser).toHaveBeenCalledWith({ id: 2, name: 'Henry' })
  })
})
