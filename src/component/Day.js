import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function DayList(){// console.log(dum);
  const [days, setD]=useState([]);

  useEffect(()=>{ fetch('http://localhost:3001/days')
  .then(my =>{
    return my.json()
  })
  .then(dt =>{
    setD(dt)
  })
}, []);

  return (<>
    <ul className='list_day'>
    {days.map(dd =>(
      <li key={dd.id}>
      <Link to={`/day/${dd.day}`}>Day {dd.id}</Link></li>
    ))}</ul>
  </>
  )
}
