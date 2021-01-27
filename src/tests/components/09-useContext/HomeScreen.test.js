const { shallow, mount } = require('enzyme')
const {
  default: HomeScreen
} = require('../../../components/09-useContext/HomeScreen')
const { UserContext } = require('../../../components/09-useContext/UserContext')

describe('Pruebas en <HomeScreen/>', () => {
  const user = {
    name: 'Henry',
    email: 'henry@gmail.com'
  }
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user
      }}
    >
      <HomeScreen />
    </UserContext.Provider>
  )
  test('debe renderizar correctamente el componente', () => {
      expect(wrapper).toMatchSnapshot()
  })
})
