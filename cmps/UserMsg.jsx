import { eventBusService } from '../services/event-bus-service.js'

export class UserMsg extends React.Component {
    state = { msg: null }

    componentDidMount() {
        this.unsubscribeFromEventBus = eventBusService.on('user-msg', (msg) => {
            const delay = 4000;
            this.setState({ msg })
            setTimeout(() => {
                this.setState({ msg: null })
            }, delay)
        })
    }
    componentWillUnmount() {
        this.unsubscribeFromEventBus();
    }

    render() {
        const { msg } = this.state
        return (!msg) ? '' :
            <React.Fragment>
                <section className="user-msg">
                    <button className="close-user-msg" onClick={() => {
                        this.setState({ msg: null })
                    }}>X</button>
                    <h3>{msg.header} ddd</h3>
                    <p>{msg.body}</p>
                </section>
            </React.Fragment>
    }
}