import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
// import { NoteTodos } from './NoteTodos.jsx'
// import { NoteTextEdit } from './NoteTextEdit.jsx'

var cmpMap = {
    NoteText: NoteText,
    NoteImg: NoteImg,
    // NoteTodos: NoteTodos,
    // NoteTextEdit: NoteTextEdit
}

// export function Note({ note, removeNote }) {
export class Note extends React.Component {
    state = {
        currView: ''
    }

    componentDidMount() {
        this.toggleView(this.props.note.type);
    }

    // changeView = (ev) => {
    //     this.toggleView(currView + 'Edit');
    // }

    toggleView = (newView) => {
        this.setState({ currView: newView }) //, () => console.log('notes:', this.props.note.type))
    }

    setColor = (ev) => {
        console.log("colorPicker", ev.target.value);
        // return (
        //     <input type="color" value={color} onChange={setColor} />
        // );
    }

    render() {
        const { note, removeNote, editNoteById } = this.props  // , updateNote
        const noteStyle = note.style;

        const { currView } = this.state
        const DynamicCmp = cmpMap[currView]

        return ( //  updateNote={updateNote}
            <div className="note note-dynamic-container" style={noteStyle}>
                <article className="note-dynamic">
                    {DynamicCmp && <DynamicCmp currView={currView} note={note} />}
                </article>
                <div className='btns-container'>
                    {/* <Link to={`/keep/`}> */}

                    <img src='assets/imgs/trash.png' alt="Delete note"
                        className="delete-icon" onClick={(event) => {
                            removeNote(event, note.id)
                        }} />

                    {/* </Link> */}


                    {/* <input type="color" name="bg-color" value='#ffffff' onChange={() => {
                        this.setColor(ev)
                        // editNoteById(note.id, 'style', { backgroundColor: this.value })
                    }} /> */}

                    {/* <input type="color" id="bg-color" name="bg-color" value='#ffffff' onChange={() => {
                        this.colorPicker(ev)
                        // editNoteById(note.id, 'style', { backgroundColor: this.value })
                    }} /> */}

                    {/* <img src='assets/imgs/bg-color.png' alt="Change backgroung color"
                        className="color-icon" onClick={() => {
                            editNoteById(note.id, 'style', { backgroundColor: 'red' })
                        }} /> */}

                    {/* <input type="color" className="fill-color" name="fill-color" id="fill-color"
                        onClick={() => {
                            editNoteById(note.id, 'style', { backgroundColor: 'red' })
                        }}></input> */}

                    {/* ev.target.value */}


                    <img src='assets/imgs/pinunpin.png' alt="Pin or unpin note"
                        className="color-icon" onClick={() => {
                            editNoteById(note.id, 'isPinned', !note.isPinned)
                        }} />

                </div>
            </div>
        )
    }
}