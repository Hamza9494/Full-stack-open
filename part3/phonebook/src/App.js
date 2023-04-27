import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])

  const [newName, setNewName] = useState('')
  const [number, setNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // const duplicate = persons.find((person) => person.name === newName)
    // if (duplicate) {
    //   alert(`${duplicate.name} already exists my dude`)
    //   return
    // }

    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} already exists my dude`)
      setNewName('')
      return
    }

    const dude = {
      name: newName,
      number,
    }
    setPersons(persons.concat(dude))
    setNewName('')
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
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={search} onChange={handleSearch} />
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handelNameChange} />
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) =>
            person.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((person) => (
            <li key={person.name}>
              {' '}
              {person.name} {person.number}{' '}
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
