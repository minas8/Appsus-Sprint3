const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
import { NavBar } from './cmps/NavBar.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'
import { BookApp } from './pages/BookApp.jsx'
import { KeepApp } from './pages/KeepApp.jsx'
import { EmailApp } from './pages/EmailApp.jsx'
import { Home } from './pages/Home.jsx'

export class App extends React.Component {

    render() {
        return (
            <Router >
                <main >
                    <NavBar />
                    <UserMsg />
                    <Switch>
                        <Route component={BookApp} path="/book" />
                        <Route component={KeepApp} path="/keep" />
                        <Route component={EmailApp} path="/email/" />
                        <Route component={Home} path="/" />
                    </Switch>
                </main>
                <footer>
                    copyrights 2020 | M.S &amp; I.O
            </footer>
            </Router>
        )
    }
}