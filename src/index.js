import React from 'react'
import ReactDOM from 'react-dom'
// import { CounterApp } from './components/01-useState/CounterApp'
// import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook'
// import FormWithCustomHook from './components/02-useEffect/FormWithCustomHook'
// import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks'
// import FocusScreen from './components/04-useRef/FocusScreen'
// import ReactExampleRef from './components/04-useRef/ReactExampleRef'
// import Layout from './components/05-useLayoutEffect/LayoutEffect'
import Memorize from './components/06-memos/Memorize'
// import SimpleForm from './components/02-useEffect/SimpleForm'
// import HookApp from './HooksApp'
import './index.css'

ReactDOM.render(
  //   <FormWithCustomHook />,
  //   <MultipleCustomHooks />,
  // <FocusScreen />,

  // <ReactExampleRef/>,
  // <Layout/>,
  <Memorize />,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
