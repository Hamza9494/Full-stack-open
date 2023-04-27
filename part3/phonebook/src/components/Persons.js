const Persons = ({ persons, search }) => {
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
          </li>
        ))}
    </ul>
  )
}

export default Persons
