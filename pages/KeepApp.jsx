import { keepService } from '../services/keep-service.js'
import { KeepList } from '../cmps/KeepCmps/KeepList.jsx'
import { KeepAdd } from '../cmps/KeepCmps/KeepAdd.jsx'

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

    editNoteById = (id, key, value) => {
        keepService.editNoteById(id, key, value);
        this.loadNotes();
    }

    updateNote = (note) => {
        keepService.updateNote(note);
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
                keepService.removeNoteById(id)
                this.loadNotes()
                    .then(res => {
                        eventBusService.emit('user-msg', { header: 'Note Deleted', body: 'This note was deleted' });
                    });
            };
        });
    };

    getNotesForDisplay(isPinned) {
        const notes = this.state.notes.filter(notes => notes.isPinned === isPinned);
        return notes;
    }

    render() {
        const notesPinned = this.getNotesForDisplay(true);
        const notesUnPinned = this.getNotesForDisplay(false);
        return (
            <section className='keep-app-container'>
                <h1>KeepApp</h1>
                <KeepAdd />
                <h3>Pinned Notes</h3>
                <KeepList listClass='pinned-note-list' notes={notesPinned} editNoteById={this.editNoteById}
                    updateNote={this.updateNote} removeNote={this.removeNote} />
                <h3>Other Notes</h3>
                <KeepList notes={notesUnPinned} editNoteById={this.editNoteById} updateNote={this.updateNote}
                    removeNote={this.removeNote} />
            </section>
        )
    }
}
