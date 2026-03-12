import { createContext, useContext, useState } from 'react'

const TodoContext = createContext()

// Barcha componentlarni o'rab oladi
export function TodoProvider({ children }) {

    const [todoList, setTodoList] = useState(() =>
        JSON.parse(localStorage.getItem('LIST')) || []
    )

    const addTodo = (name, date) => {
        setTodoList(prev => {
            const updated = [...prev, { id: Date.now(), Delete: false, name, date, completed: false }]
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    const deleteTodo = (id) => {
        setTodoList(prev => {
            const updated = prev.map((todo) =>
                todo.id === id ? { ...todo, Delete: true } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    const arxivDelete = (id) => {
        setTodoList(prev => {
            const updated = prev.filter(todo => todo.id !== id)
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    const toggleTodo = (id) => {
        setTodoList(prev => {
            const updated = prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    const editTodo = (id, newName, newDate) => {
        setTodoList(prev => {
            const updated = prev.map(todo =>
                todo.id === id ? { ...todo, name: newName, date: newDate } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    return (
        <TodoContext.Provider value={{ todoList, addTodo, deleteTodo, toggleTodo, editTodo, arxivDelete }}>
            {children}
        </TodoContext.Provider>
    )
}

// Barcha componentlarda ishlatish uchun
export function useTodo() {
    return useContext(TodoContext)
}