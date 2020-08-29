import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

var notes = [
    {
        id: utilService.makeId(8),
        type: 'NoteText',
        isPinned: true,
        info: {
            txt: `מלי ומיכאל מתחתנים בע\"ה בכ\"ד אלול (13.9) בשעה 10:00.\n
            מזל טוב :)`
        },
        style: {
            backgroundColor: 'rgb(255, 118, 5)'
        }
    },
    {
        id: utilService.makeId(8),
        type: 'NoteImg',
        isPinned: true,
        info: {
            url: 'assets/imgs/keep/regex.png',
            title: 'Helpful explanation of regex'
        },
        style: {
            backgroundColor: 'rgb(229, 78, 237)'
        }
    },
    {
        id: utilService.makeId(8),
        type: 'NoteText',
        isPinned: false,
        info: {
            txt: 'המקרר נוזל, להזמין טכנאי. לא לשכוח!!!'
        },
        style: {
            backgroundColor: 'rgb(41, 135, 236)'
        }
    },
    {
        id: utilService.makeId(8),
        type: 'NoteImg',
        isPinned: false,
        info: {
            url: 'assets/imgs/keep/quiz.png',
            title: 'Can you read what is written here ?!'
        },
        style: {
            backgroundColor: 'rgb(37, 251, 204)'
        }
    }
];

// ,
//     {
//         id: utilService.makeId(8),
//         type: 'NoteTodos',
//         isPinned: true,
//         info: {
//             label: 'TODOs for today:',
//             todos: [
//                 { txt: 'Take out the trash', doneAt: null },
//                 { txt: 'Wash the dishes', doneAt: 187111111 },
//                 { txt: 'Change the sheets', doneAt: null }
//             ]
//         },
//         style: {
//             backgroundColor: 'rgb(141, 224, 8)'
//         }
//     }

function query() {
    return Promise.resolve(notes);
}

function getNoteById(id) {
    return Promise.resolve(notes.find(note => note.id === id));
}

function editNoteById(id, key, value) {
    notes.find(note => {
        if (note.id === id) {
            note[key] = value;
        }
    });
}

function updateNote(noteToEdit) {
    let newNote;
    switch (noteToEdit.type) {
        case 'NoteText':
            newNote = _createTxtNote(noteToEdit);
            break;
        case 'NoteImg':
            newNote = _createImgNote(noteToEdit);
            break;

        default:
            break;
    }

    if (newNote.id) {
        notes.splice(notes.findIndex(note => note.id === newNote.id), 1, newNote);
    } else {
        notes.push(noteToEdit);
    }
}

function _createTxtNote(noteToEdit) {
    var note = {
        id: (noteToEdit && noteToEdit.id) ? noteToEdit.id : utilService.makeId(8),
        type: 'NoteText',
        isPinned: (noteToEdit && noteToEdit.isPinned) ? note.isPinned : false,
        info: {
            txt: (noteToEdit && noteToEdit.txt) ? note.txt : ''
        },
        style: {
            backgroundColor: (noteToEdit && noteToEdit.style && noteToEdit.style.backgroundColor) ? noteToEdit.style.backgroundColor : '#eeeeee'
        }
    }
}
function _createImgNote(noteToEdit) {
    var note = {
        id: (noteToEdit && noteToEdit.id) ? noteToEdit.id : utilService.makeId(8),
        type: 'NoteImg',
        isPinned: (noteToEdit && noteToEdit.isPinned) ? note.isPinned : false,
        info: {
            url: (noteToEdit && noteToEdit.info && noteToEdit.info.url) ? note.info.url : '',
            title: (noteToEdit && noteToEdit.info && noteToEdit.info.title) ? note.info.title : ''
        },
        style: {
            backgroundColor: (noteToEdit && noteToEdit.style && noteToEdit.style.backgroundColor) ? noteToEdit.style.backgroundColor : '#eeeeee'
        }
    }
}

function removeNoteById(id) {
    notes.splice(notes.findIndex(note => note.id === id), 1);
}

function addNote(nodeType, note) {
    // var note={
    //     type: nodeType,
    //     isPinned: true,
    //     info: {
    //         txt: 'Fullstack Me Baby!'
    //     },
    //     style: {
    //         backgroundColor: '#f6f5f5'
    //     }
    // }

    // switch (nodeType) {
    //     case 'NoteText':

    //         break;
    //     case 'NoteImg':

    //         break;
    //     case 'NoteTodos':

    //         break;
    //     default:
    //         break;
    // }
}

export const keepService = {
    query,
    getNoteById,
    editNoteById,
    updateNote,
    removeNoteById
}