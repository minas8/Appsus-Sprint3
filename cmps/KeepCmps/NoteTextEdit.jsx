
export function NoteTextEdit({ note, updateNote }) {
    setChange = (value) => {
        note.info.txt = value;
        updateNote(note)
    }

    return (
        <article className="note-txt-edit">
            <input type="text" name="" value={note.info.txt} onChange={() => { setChange(this.value) }} />
        </article>
    )
}

