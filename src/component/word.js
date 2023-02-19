import { useState } from "react";
export default function Word({sd}){
  const [isSw, setIS]=useState(false);
  const [isDone, setD]=useState(sd.isDone);
function tg(){ setIS(!isSw) }
function tgD(){ setD(!isDone) }
return (
    <tr className={isDone ? 'off':''}>
    <td><input type='checkbox' checked={isDone} onChange={tgD}/></td>
    <td>{sd.eng}</td><td>{isSw && sd.kor}</td><td><button onClick={tg}>뜻 {isSw ? '숨기기':'보기'}</button>
    <button className='btn_del'>삭제</button></td>
    </tr>
  )}
