import Json from '../abc/dfg';
import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
export default function CW(){
    const da = Json('http://localhost:4000/days');
    const hi=useHistory();
    function se(qw){ qw.preventDefault();
fetch('http://localhost:4000/words/', { method:"POST", 
headers:{ "Content-Type":"application/json"},
  body:JSON.stringify({
    day:dayRef.current.value,
    eng:engRef.current.value,
    kor:korRef.current.value,
    isDone:false
}),
  }).then(asw=>{if(asw.ok){alert('생성 완료되었습니다.');
hi.push(`/day/${dayRef.current.value}`)
}
  })}
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);
    return ( <form onSubmit={se}>
        <div className="input_area">
        <label>Eng</label>
        <input type='text'ref={engRef}/></div>
        <div className="input_area">
        <label>Kor</label>
        <input type='text'ref={korRef}/></div>
        <div className="input_area">
        <label>day</label>
        <select ref={dayRef}>
        {da.map(ys=>(
     <option key={ys.id} value={ys.day}>{ys.day}</option>
        ))}            
        </select></div>
        <button>저장</button>
    </form>
    )}