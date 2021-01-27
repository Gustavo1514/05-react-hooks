const { shallow, mount } = require('enzyme')
const {
  default: AppRouter
} = require('../../../components/09-useContext/AppRouter')
const { UserContext } = require('../../../components/09-useContext/UserContext')

describe('Pruebas sobre <AppRouter />', () => {
  const user = {
    id: 1,
    name: 'Henry'
  }
  const wrapper = mount(
    <UserContext.Provider
      value={{
        user
      }}
    >
      <AppRouter />
    </UserContext.Provider>
  )
  test('debe mostarse correctamente ', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
