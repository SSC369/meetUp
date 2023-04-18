import {Switch, Route, Redirect} from 'react-router-dom'
import {useState} from 'react'
import Home from './components/Home'
import MeetingContext from './context/MeetingContext'
import Register from './components/Register'
import NotFound from './components/NotFound'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const App = () => {
  const [topic, isTopic] = useState(topicsList[0].id)
  const [Name, isName] = useState('')
  const [isRegistered, isRegister] = useState(false)

  const getTopic = v => {
    isTopic(v)
  }

  const getName = v => {
    isName(v)
  }

  const getRegistered = v => {
    isRegister(v)
  }

  return (
    <MeetingContext.Provider
      value={{isRegistered, getRegistered, topic, getTopic, Name, getName}}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </MeetingContext.Provider>
  )
}

export default App
