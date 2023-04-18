import {Component} from 'react'
import Header from '../Header'
import MeetingContext from '../../context/MeetingContext'
import {
  RegisterContainer,
  Form,
  FormContainer,
  Button,
  Input,
  Select,
  Heading,
  Label,
  Err,
} from './styledComponents'
import './index.css'

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

class Register extends Component {
  state = {
    err: false,
  }

  render() {
    const {err} = this.state

    return (
      <MeetingContext.Consumer>
        {value => {
          const {getTopic, topic, Name, getName} = value

          const {history} = this.props

          const onRegister = e => {
            e.preventDefault()
            if (Name) {
              this.setState({err: false})
              history.replace('/')
            } else {
              this.setState({err: true})
            }
          }

          return (
            <>
              <Header />
              <RegisterContainer>
                <FormContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                    className="register-image"
                  />
                  <Form onSubmit={onRegister}>
                    <Heading>Let us join</Heading>

                    <Label htmlFor="name">NAME</Label>
                    <Input
                      placeholder="Your name"
                      value={Name}
                      onChange={e => getName(e.target.value)}
                      id="name"
                      type="text"
                    />

                    <Label htmlFor="topics">TOPICS</Label>
                    <Select
                      id="topics"
                      onChange={e => getTopic(e.target.value)}
                      value={topic}
                    >
                      {topicsList.map(item => (
                        <option value={item.id} key={item.id}>
                          {item.displayText}
                        </option>
                      ))}
                    </Select>
                    <Button type="submit">Register Now</Button>
                    {err && <Err>Please enter your name</Err>}
                  </Form>
                </FormContainer>
              </RegisterContainer>
            </>
          )
        }}
      </MeetingContext.Consumer>
    )
  }
}

export default Register
