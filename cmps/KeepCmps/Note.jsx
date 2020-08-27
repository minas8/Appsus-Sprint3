import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
import { NoteTodos } from './NoteTodos.jsx'


var cmpMap = {
    NoteText: NoteText,
    NoteImg: NoteImg,
    NoteTodos: NoteTodos
}

// export function Note({ note, removeNote }) {
export class Note extends React.Component {
    state = {
        currView: ''
    }

    componentDidMount() {
        this.toggleView(this.props.note.type);
    }

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
        const { note, removeNote, editNoteById } = this.props
        const noteStyle = note.style;

        const { currView } = this.state
        const DynamicCmp = cmpMap[currView]

        return (
            <div className="note note-preview-container" style={noteStyle}>
                <article className="note-preview">
                    {DynamicCmp && <DynamicCmp currView={currView} note={note}
                        removeNote={removeNote} />}
                </article>
                <div className='btns-container'>
                    {/* <Link to={`/keep/`}> */}
                    <img src='../../assets/imgs/trash.png' alt="Delete note"
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

                    {/* <img src='../../assets/imgs/bg-color.png' alt="Change backgroung color"
                        className="color-icon" onClick={() => {
                            editNoteById(note.id, 'style', { backgroundColor: 'red' })
                        }} /> */}

                    {/* <input type="color" className="fill-color" name="fill-color" id="fill-color"
                        onClick={() => {
                            editNoteById(note.id, 'style', { backgroundColor: 'red' })
                        }}></input> */}

                    {/* ev.target.value */}


                    <img src='../../assets/imgs/pinunpin.png' alt="Change backgroung color"
                        className="color-icon" onClick={() => {
                            editNoteById(note.id, 'isPinned', !note.isPinned)
                        }} />

                </div>
            </div>
        )
    }
}


{/* <svg className="delete-icon" viewBox="0 0 448 512">
    <path onClick={(event) => {
        removeNote(event, note.id)
    }} fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z" />
</svg> */}