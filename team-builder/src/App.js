import React, {useState} from 'react';
import './App.css';

import { team } from './team-members';
import Form from './components/Form';

function App() {
  const [teamState, setTeamState] = useState(team);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [memberToEdit, setMemberToEdit] = useState();

  const changeHandler = event => {
    if(memberToEdit) {
      setMemberToEdit({...memberToEdit, [event.target.name]: event.target.value})
    } else {
      setFormState({...formState, [event.target.name]: event.target.value});
    }
  }

  const addMember = event => {
    event.preventDefault();
    setTeamState([...teamState, formState]);
    setFormState({
      name: '',
      email: '',
      role: ''
    })
  }

  const editMember = event => {
    event.preventDefault();

  }

  const fillEditForm = member => {
    setMemberToEdit(member);
  }

  return (
    <div className="App">
      <Form 
        changeHandler={changeHandler} 
        formState={formState} 
        addMember={addMember} 
        editMember={editMember}
        memberToEdit={memberToEdit}
      />
      {teamState.map(member => (
        <div key={member.name}>
          <p>{member.name}</p>
          <p>{member.email}</p>
          <p>{member.role}</p>
          <button onClick={() => fillEditForm(member)}>Edit</button>
        </div>
      ))}
    </div>
  );
}

export default App;
