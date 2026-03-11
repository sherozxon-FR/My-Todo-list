import { useState } from 'react'

export function useTodo() {

    const [todoList, setTodoList] = useState(() =>
        JSON.parse(localStorage.getItem('LIST')) || []
    )

    const addTodo = (name, date) => {
        setTodoList(prev => {
            const updated = [...prev, { id: Date.now(), name, date, completed: false }]
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    const deleteTodo = (id) => {
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

    // berilgan id ga mos vazifaning name va date ini yangilaydi
    const editTodo = (id, newName, newDate) => {
        setTodoList(prev => {
            const updated = prev.map(todo =>
                todo.id === id ? { ...todo, name: newName, date: newDate } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    return { todoList, addTodo, deleteTodo, toggleTodo, editTodo }
}