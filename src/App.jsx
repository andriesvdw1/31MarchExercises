
import './App.css'
import Greeting from './components/Greeting/Greeting'
import Online from './components/Online/Online'
function App() {


  return (
    <>
      <Greeting isMember = {true}/>
      <Greeting isMember = {false}/>
      <Online isOnline={true}/>
      <Online isOnline={false}/>

    </>
  )
}

export default App
