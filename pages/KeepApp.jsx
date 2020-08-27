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

    setNoteStyle = (id, style) => {
        keepService.setNoteStyleById(id, style);
        this.loadNotes();
    }

    removeNote = (ev, id) => {
        ev.stopPropagation();

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#56e674',
            cancelButtonColor: '#e65656',
            confirmButtonText: 'Yes, delete note'
        }).then((result) => {
            if (result.value) {
                // this.toggleExpandEmail();
                keepService.removeNoteById(id)
                this.loadNotes()
                    .then(res => {
                        eventBusService.emit('user-msg', { header: 'Note Deleted', body: 'This note was deleted' });
                    });
            };
        });
    };

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
                <KeepList notes={notesPinned} setNoteStyle={this.setNoteStyle} removeNote={this.removeNote} />
                <h3>Other Notes</h3>
                <KeepList notes={notes} setNoteStyle={this.setNoteStyle} removeNote={this.removeNote} />
            </section>
        )
    }
}
