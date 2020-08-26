import { NoteText } from './NoteText.jsx'
import { NoteImg } from './NoteImg.jsx'
// import { NoteTodos } from './NoteTodos.jsx'

export function DynamicCmp(props) {
    switch (props.currView) {
        case 'NoteText':
            return <NoteText {...props} />
        case 'NoteImg':
            return <NoteImg {...props} />
        // case 'NoteTodos':
        //     return <NoteTodos {...props} />
        default:
            return <h1>Something went wrong</h1>
    }
}

