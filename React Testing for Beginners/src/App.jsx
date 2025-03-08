import './App.css'
import Greeting from './components/Greeting'
import UserProfile from './components/UserProfile'
import Counter from './components/Counter/Counter'

function App() {
  return (
    <>
      <Greeting name={'Pedro'} />
      <Counter />
      <UserProfile userId={4} />
    </>
  )
}

export default App
