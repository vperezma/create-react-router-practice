import React from 'react'
import {
    BrowserRouter,
    Route,
    Link
  } from 'react-router-dom'

function topic ({match}) {

       return  <div>{match.params.topicId}</div>

}

export default function Topics () {
    return (
        <div>
            <h2>Topics </h2>
            <ul>
                <li>
                    <Link to="/topics/rendering"> Rendering with react</Link>
                </li>
                <li>
                    <Link to="/topics/components"> components</Link>
                </li>
                <li>
                    <Link to="/topics/property"> Props vs State</Link>
                </li>
            </ul>
            <hr />

        <Route path='/topics/:topicId' component={topic} />
        <Route exact path='/topics'render={() => {
            return <h3> Please select a topic </h3>
        }} />
        </div>
    )
}