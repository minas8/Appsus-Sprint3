
export function NoteImg({ note, removeNote }) {
    return (
        <article className="note-img-preview">
            <img src={note.info.url} />
            <h4>{note.info.title}</h4>
        </article>
    )
}