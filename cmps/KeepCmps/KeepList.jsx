import { Note } from './Note.jsx'

export function KeepList({ notes, removeNote }) {
    // export class KeepList extends React.Component {

    return (
        <ul className="note-list clean-list">
            {notes.map(note =>
                <li key={note.id}>
                    <Note note={note} removeNote={removeNote} />
                </li>)
            }
        </ul>
    )
}


