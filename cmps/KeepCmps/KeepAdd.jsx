
export class KeepAdd extends React.Component {
    state = {
        isExtended: false,
        type: 'txt'
    }


    render() {
        return (
            <div className='keep-add-container'>
                {/* onClick={} */}
                <input type="text" name="input-note" id="" placeholder={`What\'s on your mind?`} />
                <div>
                    <img src="../../assets/imgs/note_text.png" alt="Add note with text" />
                    <img src="../../assets/imgs/note_img.png" alt="Add note with image" />
                    <img src="../../assets/imgs/note_list.png" alt="Add note with todo list" />
                </div>
            </div>
        )
    }
}

