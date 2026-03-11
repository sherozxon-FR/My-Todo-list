import { useState } from 'react'
import styles from './AddToDo.module.css'
import { useTodo } from '../../hooks/useToDo'

function AddToDo() {
  const { addTodo } = useTodo()
  const [name, setName] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(name, date)
    setName('')
    setDate('')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.field}>
        <label className={styles.label}>Task name</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter task..."
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Date</label>
        <input
          className={styles.dateInput}
          type="date"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <button type="submit" className={styles.saveBtn}>+ Add Task</button>

    </form>
  )
}

export default AddToDo