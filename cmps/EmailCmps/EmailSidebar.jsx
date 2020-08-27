
export class EmailSidebar extends React.Component {


    render() {

        return (
            <section className="side-bar-container">
                <button className="compose-mail-btn" onClick={this.props.toggleCompositor}>Compose</button>
            </section>
        )

    }

}