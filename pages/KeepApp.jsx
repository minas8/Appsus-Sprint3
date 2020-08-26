import { keepService } from '../services/keep-service.js'
import { KeepList } from '../cmps/KeepCmps/KeepList.jsx'
// import { KeepEdit } from '../cmps/KeepCmps/KeepEdit.jsx'

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: ''
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        keepService.query()
            .then(notes => {
                this.setState({ notes }) //, () => console.log('notes:', this.state.notes))
            });
    }

    removeNote = (id) => {
        keepService.removeNoteById(id);
        this.loadNotes();
    }

    getPinnedNotesForDisplay() {
        const notes = this.state.notes.filter(notes => notes.isPinned);
        return notes;
    }

    // TODO: use only one func => send notes.isPinned as parameter
    getUnPinnedNotesForDisplay() {
        const notes = this.state.notes.filter(notes => !notes.isPinned);
        return notes;
    }

    render() {
        const notesPinned = this.getPinnedNotesForDisplay();
        const notes = this.getUnPinnedNotesForDisplay();
        return (
            <section className='keep-app-container'>
                <h1>KeepApp</h1>
                {/* <KeepEdit /> */}
                <h3>Pinned Notes</h3>
                <KeepList notes={notesPinned} removeNote={this.removeNote} />
                <h3>Other Notes</h3>
                <KeepList notes={notes} removeNote={this.removeNote} />
            </section>
        )
    }
}
