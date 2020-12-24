const { shallow } = require('enzyme')
const { default: HookApp } = require('../HooksApp')

describe('Pruebas sobre HookApp', () => {
  test('debe renderizar corectamente', () => {
    let wrapper = shallow(<HookApp />)
    expect(wrapper).toMatchSnapshot()
  })
})
