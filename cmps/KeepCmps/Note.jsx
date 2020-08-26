// import { DynamicCmp } from './DynamicCmp.jsx'
import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
// import { NoteTodos } from './NoteTodos.jsx'
const { Link } = ReactRouterDOM

var cmpMap = {
    NoteText: NoteText,
    NoteImg: NoteImg
    // NoteTodos: NoteTodos
}

// export function Note({ note, removeNote }) {
export class Note extends React.Component {
    state = {
        currView: ''
    }

    componentDidMount() {
        console.log('componentDidMount -\n this.props.note.type:', this.props.note.type);
        this.toggleView(this.props.note.type);
    }

    toggleView = (newView) => {
        this.setState({ currView: newView }, () => console.log('notes:', this.props.note.type))
    }

    render() {
        const { note, removeNote } = this.props
        const noteStyle = note.style;

        const { currView } = this.state
        const DynamicCmp = cmpMap[currView]
        // console.log('currView:', currView);

        return (
            <Link to={`/note/${note.id}`}>
                <div className="note note-preview-container" style={noteStyle}>
                    <article className="note-preview">
                        {/* <NoteText note={note} removeNote={removeNote} /> */}
                        {DynamicCmp && <DynamicCmp currView={currView} note={note} removeNote={removeNote} />}
                    </article>
                </div>
            </Link>
        )
    }
}
