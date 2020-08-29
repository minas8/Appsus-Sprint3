
export function NoteText({ note, isEdit }) {
    return (
        <div>
            {
                !isEdit && <article className="note-preview">
                    <p>{note.info.txt}</p>
                </article>
            }
            {
                isEdit && <article className="note-txt-edit">
                    <input type="text" name="" value={note.info.txt} onChange={() => { setChange(this.value) }} />
                </article>
            }
        </div>

    )
}





