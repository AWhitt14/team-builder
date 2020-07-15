import React, { useState } from 'react';
import './form.css';


const Form = props => {
    
    const [fName, setfName ] = useState('');
    const [lName, setlName ] = useState('');
    const [Email, setEmail ] = useState('');
    const [Role, setRole ] = useState('');
    
    const handlefName = event => setfName(event.target.value);
    const handlelName = event => setlName(event.target.value);
    const handleEmail= event => setEmail(event.target.value);
    const handleRole= event => setRole(event.target.value);

    const handleSubmit = event => {
      event.preventDefault();
      if(fName && lName && Email && Role){
      props.setTeam([...props.team, { fName, lName, Email, Role }]);
      alert(`${fName} ${lName} has been added`);}
      else( alert(`please complete all fields`));
    };

    return(
        <div className='box'>
            <form className='form' onSubmit={handleSubmit}>

              <h2> Tell us about yourself!</h2>
              <div className='names'>
                <input className='content' onChange={handlefName} type='text' placeholder='First Name' name='fName' value={fName}/>
                <input className='content' onChange={handlelName} type='text' placeholder='Last Name' name='lName' value={lName}/>
              </div>
             <input className='content' onChange={handleEmail} type='text' placeholder='Email' name='Email' value={Email} />

             <input className='content' onChange={handleRole} type='text' placeholder='Role' name='Role' value={Role}/>

             <button className='b1' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;