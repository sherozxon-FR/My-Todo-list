

import { useState } from 'react'
import { useTodo } from '../context/TodoContext'
import styles from './Active.module.css'

function Active() {
  const { todoList, deleteTodo, toggleTodo, editTodo } = useTodo()
  const [editingTodo, setEditingTodo] = useState(null)
  const [editName, setEditName] = useState('')
  const [editDate, setEditDate] = useState('')

  const activeTodos = todoList.filter(todo => !todo.completed && !todo.Delete)



  const handleEdit = (todo) => {
    setEditingTodo(todo)
    setEditName(todo.name)
    setEditDate(todo.date)
  }

  const handleSave = () => {
    if (editName.trim() === '') return
    editTodo(editingTodo.id, editName, editDate)
    setEditingTodo(null)
  }

  const handleClose = () => {
    setEditingTodo(null)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Active Tasks</h1>

      {activeTodos.length === 0 ? (
        <p className={styles.empty}>No tasks yet</p>
      ) : (
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>#</th>
                <th>Task name</th>
                <th>Date</th>
                <th>Done</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {activeTodos.map((todo, index) => (
                <tr key={todo.id}>
                  <td>{index + 1}</td>
                  <td>{todo.name}</td>
                  <td>{todo.date}</td>
                  <td>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                    />
                  </td>
                  <td>
                    <button
                      className={styles.editBtn}
                      onClick={() => handleEdit(todo)}
                    >
                      edit
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => deleteTodo(todo.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* editingTodo bor bo'lsa modal ochiladi */}
      {editingTodo && (
        <div className={styles.overlay} onClick={handleClose}>
          <div className={styles.modal} onClick={e => e.stopPropagation()}>

            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Edit Task</h2>
              <button className={styles.closeBtn} onClick={handleClose}>✕</button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.field}>
                <label className={styles.label}>Task name</label>
                <input
                  className={styles.input}
                  value={editName}
                  onChange={e => setEditName(e.target.value)}
                  placeholder="Task name..."
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Date</label>
                <input
                  className={styles.input}
                  type="date"
                  value={editDate}
                  onChange={e => setEditDate(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button className={styles.cancelBtn} onClick={handleClose}>Cancel</button>
              <button className={styles.saveBtn} onClick={handleSave}>Save</button>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default Active