const Persons = ({ persons, search, handleDelete }) => {
  return (
    <ul>
      {persons
        .filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((person) => (
          <li key={person.name}>
            {' '}
            {person.name} {person.number}{' '}
            <button
              onClick={() => {
                handleDelete(person.id)
              }}
            >
              delete
            </button>
          </li>
        ))}
    </ul>
  )
}

export default Persons
