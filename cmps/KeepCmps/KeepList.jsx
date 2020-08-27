import { Note } from './Note.jsx'
const { Link } = ReactRouterDOM

export function KeepList({ notes, listClass, removeNote, editNoteById }) {
    // export class KeepList extends React.Component {

    return (
        <ul className={`note-list clean-list ${listClass}`}>
            {notes.map(note =>
                <li key={note.id}>
                    <Link to={`/keep/${note.id}`}>
                        <Note note={note} removeNote={removeNote} editNoteById={editNoteById} />
                    </Link>
                </li>)
            }
        </ul>
    )
}


