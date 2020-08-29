
export function NoteTodos({ note, doneTodo }) {
    const info = note.info;

    return (
        <article className="note-todo-preview">
            <h3>{info.label}</h3>
            <ul>
                {
                    info.todos.map(todo => {
                        console.log('todo:', todo, 'todo.txt:', todo.txt);
                        <li>
                            {todo.txt}
                        </li>
                    })
                }
            </ul>
        </article>
    )
}





// export function NoteTodos({ note, doneTodo }) {
//     const info = note.info;

//     doneTodo = (noteId, todoTxt) => {

//     }

//     const todoStyle = {
//         style: {
//             'text-decoration': 'line-through'
//         }
//     };

//     return (
//         <article className="note-img-preview">
//             <h3>{info.label}</h3>
//             <div>
//                 {info.todos.map(todo => {
//                     console.log(todo)
//                     {
//                         <div onClick={() => doneTodo(note.id, todo.txt)} style={todoStyle}>
//                             {todo.txt}
//                         </div>
//                     }
//                     // info.doneAt &&

//                     // {
//                     //     !info.doneAt || <li onClick={() => doneTodo(note.id, todo.txt)}>
//                     //         {todo.txt}
//                     //     </li>
//                     // }
//                 })}
//             </div>
//         </article>
//     )
// }


// // console.log(todo);
