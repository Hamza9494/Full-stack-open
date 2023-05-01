import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    // axios.get('http://localhost:3001/notes').then((response) => {
    //   setNotes(response.data)
    // })
    noteService.getAll().then((initialNotes) => setNotes(initialNotes))
  }, [])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    }

    // axios
    //   .post('http://localhost:3001/notes', noteObject)
    //   .then((res) => setNotes(notes.concat(res.data)))
    noteService
      .create(noteObject)
      .then((createdNote) => setNotes(notes.concat(createdNote)))

    setNewNote('')
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  const toggleImportance = (id) => {
    const url = `http://localhost:3001/notes/${id}`
    const note = notes.find((note) => note.id === id)
    const changedNote = { ...note, important: !note.important }

    // axios.put(url, changedNote).then((res) => {
    //   console.log(res.data)
    //   setNotes(notes.map((note) => (note.id !== id ? note : res.data)))
    // })
    noteService.update(id, changedNote).then((updatedNote) => {
      setNotes(notes.map((n) => (n.id !== id ? n : updatedNote)))
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        <ul>
          {notesToShow.map((note) => (
            <Note
              key={note.id}
              note={note}
              toggleImportance={() => {
                toggleImportance(note.id)
              }}
            />
          ))}
        </ul>
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
