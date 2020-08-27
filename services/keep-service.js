import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

var notes = [
    {
        id: utilService.makeId(8),
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "מלי ומיכאל מתחתנים בע\"ה בכ\"ד אלול (13.9) בשעה 10:00. מזל טוב :)"
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    },
    {
        id: utilService.makeId(8),
        type: "NoteText",
        isPinned: false,
        info: {
            txt: "המקרר נוזל, להזמין טכנאי. לא לשכוח!!!"
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    },
    {
        id: utilService.makeId(8),
        type: "NoteImg",
        isPinned: false,
        info: {
            url: "../../assets/imgs/keep/quiz.png",
            title: "Can you read what is written here ?!"
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    },
    {
        id: utilService.makeId(8),
        type: "NoteTodos",
        isPinned: false,
        info: {
            label: "רשימת קניות:",
            todos: [
                { txt: "2 חלב", doneAt: null },
                { txt: "1 קוטג\'", doneAt: 187111111 }
            ]
        },
        style: {
            backgroundColor: utilService.getRandomColor()
        }
    }
];


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