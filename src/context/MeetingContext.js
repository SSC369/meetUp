import React from 'react'

const MeetingContext = React.createContext({
  topic: '',
  Name: '',
  isRegistered: false,
  getTopic: () => {},
  getName: () => {},
  getRegistered: () => {},
})

export default MeetingContext
