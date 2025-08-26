import './App.css'

import FunctionalComponent from './components/FunctionalComponent'
import ClassComponent from './components/ClassComponent'
import PropsExample from './components/PropsExample'

function App() {

  return (
    <>
    <h1>Hello World React</h1>
    <FunctionalComponent />
    <ClassComponent/>
    <PropsExample nome="Flavio" idade={33}/>
    </>
  )
}

export default App
