import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import Chat from './components/Chat/chat';
const App=()=>(
    <Router>
        <Route path="/" exact component={Welcome}/>
        <Route path="/chat" component={Chat}/>
    </Router>
)
export default App;