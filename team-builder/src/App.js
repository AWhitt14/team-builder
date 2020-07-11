import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Form from './components/Form';


function App() {
  const [teamList, setTeam] = useState([
    {fName: 'Alex', lName: 'Whitt', Email: 'whitta14@gmail.com', Role: 'Couch Potato'}
  ]);
  return (
    <div>
      <nav>
        <Link to='/' className='link'>Home</Link>
        <Link to='/join' className='link'>Join Team</Link>
      </nav>
      <Switch>
      <Route exact path='/'>
        <Cards team={teamList}/>
      </Route>
      <Route path='/join'>
        <Form team={teamList} setTeam={setTeam}/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
