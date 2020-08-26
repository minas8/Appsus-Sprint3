
export function NoteText({ note, removeNote }) {
    return (
        <article className="note-preview">
            <p>{note.info.txt}</p>
        </article>
    )
}