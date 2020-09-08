import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom'
import Join from './Components/Join/Join'
import Chat from './Components/Chat/Chat'



export default function App() {
    return (
        <Suspense fallback="Loading...">
            <BrowserRouter>
                <Switch>
                    <Redirect exact path="/" to="/join"/>
                    <Route path="/join" component={Join}/>
                    <Route path="/chat" component={Chat}/>
                </Switch>
            </BrowserRouter>
        </Suspense>
    )
}
