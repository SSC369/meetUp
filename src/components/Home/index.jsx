import {Link} from 'react-router-dom'
import Header from '../Header'
import MeetingContext from '../../context/MeetingContext'
import {Button} from '../Register/styledComponents'
import {
  Image,
  HomeContainer,
  Description,
  HomeHeading,
  RegisteredHeading,
  RegisteredDescription,
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

const Home = () => (
  <MeetingContext.Consumer>
    {value => {
      const {topic, Name, isRegistered, getRegistered} = value
      const findTopic = topicsList.find(item => item.id === topic)
      const {displayText} = findTopic

      return (
        <>
          <Header />
          {isRegistered && Name ? (
            <>
              <HomeContainer>
                <RegisteredHeading>Hello {Name}</RegisteredHeading>
                <RegisteredDescription>
                  Welcome to {displayText}
                </RegisteredDescription>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  className="meetup-image"
                  alt="meetup"
                />
              </HomeContainer>
            </>
          ) : (
            <>
              <HomeContainer>
                <HomeHeading>Welcome to Meetup</HomeHeading>
                <Description>Please register for the topic</Description>
                <Link to="/register" className="nav-link">
                  <Button type="button" onClick={() => getRegistered(true)}>
                    Register
                  </Button>
                </Link>
                <Image
                  src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                  alt="meetup"
                  className="meetup-image"
                />
              </HomeContainer>
            </>
          )}
        </>
      )
    }}
  </MeetingContext.Consumer>
)

export default Home
