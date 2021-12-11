import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PersonList from './components/PersonList'
import IPerson from './IPerson.interface'
const faker = require('faker')

interface IState {
  people: IPerson[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>(new Array(5).fill(0).map(() => {
    const { name, username, posts, company } = faker.helpers.createCard()
    return { name, username, posts, company }
  }))

  return (
    <div className="App">
      <h1>Person Manager</h1>
      <PersonList people={people} />
    </div>
  )
}

export default App
