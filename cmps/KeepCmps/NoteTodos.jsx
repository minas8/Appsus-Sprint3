
export function NoteTodos({ note, doneTodo }) {
    const info = note.info;

    doneTodo = (noteId, todoTxt) => {

    }

    const todoStyle = {
        style: {
            'text-decoration': 'line-through'
        }
    };

    return (
        <article className="note-img-preview">
            <h3>{info.label}</h3>
            <ul>
                {info.todos.map(todo => {
                    console.log(todo);
                    {
                        info.doneAt && <li onClick={() => doneTodo(note.id, todo.txt)} style={todoStyle}>
                            {todo.txt}
                        </li>
                    }
                    {
                        !info.doneAt || <li onClick={() => doneTodo(note.id, todo.txt)}>
                            {todo.txt}
                        </li>
                    }
                })}
            </ul>
        </article>
    )
}
