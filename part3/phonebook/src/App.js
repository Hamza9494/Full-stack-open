import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'
import Connect from './services/Connect'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    Connect.getAll().then((initialPersons) => setPersons(initialPersons))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (persons.find((person) => person.name === newName)) {
      // alert(`${newName} already exists my dude`)
      // setNewName('')

      const person = persons.filter((person) => person.name === newName)
      const personId = person[0].id
      const personInfo = persons.find((person) => person.id === personId)
      const updatedPerson = { ...personInfo, number }
      if (window.confirm(`${newName} already exist wanna update the number?`)) {
        Connect.update(personId, updatedPerson).then(
          (updatedPerson) =>
            setPersons(
              persons.map((person) =>
                person.id !== personId ? person : updatedPerson
              )
            ),
          setErrorMessage(`${newName} updated Successfully`),
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        )
      }
      return
    }

    const contact = {
      name: newName,
      number,
    }

    Connect.create(contact).then(
      (addedPerson) => setPersons(persons.concat(addedPerson)),
      setErrorMessage(`${contact.name} Added Successfully`),
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    )
    // setPersons(persons.concat(dude))
    setNewName('')
    setNumber('')
  }

  const handelNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNumber(e.target.value)
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then((res) => setPersons(persons.filter((person) => person.id !== id)))
      .catch((err) => alert(err.message))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />

      <Filter search={search} handleSearch={handleSearch} />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        handelNameChange={handelNameChange}
        number={number}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      <h3>Numbers</h3>
      <Persons search={search} persons={persons} handleDelete={handleDelete} />
    </div>
  )
}

export default App
