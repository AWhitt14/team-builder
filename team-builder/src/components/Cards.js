import React from 'react';
import '../components/cards.css';

const PlayerCard = props => {
    console.log(props.team);
    return (
     <div className="box">
      {props.team.map(e => (
        
        <div  key={e.Role + e.Name} className='card'>
          <h2 className='role'>{e.Role}</h2>
      <p>{e.fName} {e.lName}</p>
          <p>{e.Email}</p>
        </div>
      ))}
     </div>
    )
}

export default PlayerCard;
