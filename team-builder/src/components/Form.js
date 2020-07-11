import React, { useState } from 'react';
import './form.css';


const Form = props => {
    //const defaultMember = {Name: '', Email: '', Role: ''}
    //const { newMember, setMember } = useState(defaultMember);
    
    const [Name, setName ] = useState('');
    const [Email, setEmail ] = useState('');
    const [Role, setRole ] = useState('');
    
    const handleName = event => setName(event.target.value);
    const handleEmail= event => setEmail(event.target.value);
    const handleRole= event => setRole(event.target.value);
  // const handleChange = e => {
  //     console.log(e.target.name,e.target.value);
  //   setMember({
  //     ...newMember, [e.target.name]: e.target.value
  //   });
  // };


    // const handleSubmit = e => {
    //     e.preventDefault();
    //   props.setTeam([...props.team, newMember]);
    // }

    const handleSubmit = event => {
      event.preventDefault();
      props.setTeam([...props.team, { Name, Email, Role }]);
      alert(`${Name} has been added`);
    };

    return(
        <div className='box'>
            <form className='form' onSubmit={handleSubmit}>

            <input onChange={handleName} type='text' placeholder='Name' name='Name' value={Name}/>

            <input onChange={handleEmail} type='text' placeholder='Email' name='Email' value={Email} />

            <input onChange={handleRole} type='text' placeholder='Role' name='Role' value={Role}/>

            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;