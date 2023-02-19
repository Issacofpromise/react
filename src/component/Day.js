import { useEffect, useState } from "react";
import {Link} from 'react-router-dom';

export default function DayList(){// console.log(dum);
  const [days, setD]=useState([]);
  const [ct, setC]=useState(0);

  function onk() { setC(ct+1);
  }
  function onk1() { setD([...days,{ id:Math.random(),
  day:1}]);
  }
  useEffect(()=>{ console.log('change');
}, [])
  return (<>
    <ul className='list_day'>
    {days.map(dd =>(
      <li key={dd.id}>
      <Link to={`/day/${dd.day}`}>Day {dd.id}</Link></li>
    ))}</ul>
    <button onClick={onk}>{ct}</button>
  <button onClick={onk1}>change</button>
  </>
  )
}
