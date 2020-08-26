import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

var notes = [
    {
        id: utilService.makeId(8),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        },
        style: {
            backgroundColor: "#f6f5f5"
        }
    },
    {
        id: utilService.makeId(8),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "React is on!"
        },
        style: {
            backgroundColor: "#f6f5f5"
        }
    }
];

/*
{
        id: utilService.makeId(8),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "http://some-img/me",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#f6f5f5"
        }
    },
    {
        id: utilService.makeId(8),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: "#f6f5f5"
        }
    }
*/
function query() {
    return Promise.resolve(notes);
}

function getNoteById(id) {
    return Promise.resolve(notes.find(note => note.id === id));
}

function removeNoteById(id) {
    notes.splice(notes.findIndex(note => note.id === id), 1);
}

function addNote(nodeType, note) {
    // var note={
    //     type: nodeType,
    //     isPinned: true,
    //     info: {
    //         txt: "Fullstack Me Baby!"
    //     },
    //     style: {
    //         backgroundColor: "#f6f5f5"
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
    removeNoteById
}