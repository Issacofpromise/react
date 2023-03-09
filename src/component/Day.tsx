import Json from '../abc/dfg.ts';
import {Link} from 'react-router-dom';
import React from 'react';

export interface Dy { id:number; day:number; }

export default function DayList(){ 
  const days: Dy[]=Json('http://localhost:4000/days');
  const nt={days}; console.log(nt);
if(days.length==0){ return <span>Loading...</span>}

  return (<>
    <ul className='list_day'>
    {days.map(dd =>(
      <li key={dd.id}>
      <Link to={`/day/${dd.day}`}>Day {dd.day}</Link></li>
    ))}</ul>
  </>
  )
}
