import React, {useState} from 'react';
import './App.css';

import { team } from './team-members';
import Form from './components/Form';

function App() {
  const [teamState, setTeamState] = useState(team);

  return (
    <div className="App">
      {teamState.map(member => (
        <h1 key={member.name}>{member.name}</h1>
      ))}
    </div>
  );
}

export default App;
