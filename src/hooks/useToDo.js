import { useState } from 'react'

// Todo ro'yxatini boshqaruvchi custom hook
export function useTodo() {

    // Sahifa yuklanganda localStorage dan ro'yxatni o'qiydi
    const [todoList, setTodoList] = useState(() =>
        JSON.parse(localStorage.getItem('LIST')) || []
    )

    // Yangi todo qo'shadi
    const addTodo = (name, date) => {
        setTodoList(prev => {
            const updated = [...prev, { id: Date.now(), Delete: false, name, date, completed: false }]
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    // Todoni o'chiradi
    const deleteTodo = (id) => {
        setTodoList(prev => {
            const updated = prev.map((todo) =>
                todo.id === id ? { ...todo, Delete: true } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    // Todoni bajarildi / bajarilmadi holatiga o'tkazadi
    const toggleTodo = (id) => {
        setTodoList(prev => {
            const updated = prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
            localStorage.setItem('LIST', JSON.stringify(updated))
            return updated
        })
    }

    // Todoning nomi va sanasini yangilaydi
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