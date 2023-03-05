import Json from '../abc/dfg';
import {Link} from 'react-router-dom';

export default function DayList(){ 
  const days = Json('http://localhost:4000/days');
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
