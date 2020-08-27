
export function NoteTodos({ note, doneTodo }) {
    const info = note.info;

    doneTodo = () => {

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
                    <li onClick={() => doneTodo(todo.txt)} style={todoStyle}>{todo.txt}</li>
                })}
            </ul>
        </article>
    )
}
