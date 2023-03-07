import React from "react";
import { useState } from "react";
interface Io {sd:Iwd;}
export interface Iwd { day:string; eng:string; kor:string; 
  isDone:boolean; id:number;}
  
export default function Word({sd:a}: Io){ 
  const [sd, setW]=useState(a);//console.log(sd);
  const [isSw, setIS]=useState(false);
  const [isDone, setD]=useState(sd.isDone);
 
 function tg(){ setIS(!isSw) }
function tgD(){ //setD(!isDone) 
fetch(`http://localhost:4000/words/${sd.id}`, {
  method:"PUT", headers:{ "Content-Type":"application/json",},
  body:JSON.stringify({...sd, isDone:!isDone,}),
}).then(asw=>{if(asw.ok){setD(!isDone)}
})}
function del(){
  if(window.confirm('삭제 하시겠습니까?')){
fetch(`http://localhost:4000/words/${sd.id}`, {
  method:"DELETE",})
  .then(asw=>{if(asw.ok){setW({ ...sd,
    id:0})}
})}}
if(sd.id==0){return null}

return (<tr className={isDone ? 'off':''}>
    <td><input type='checkbox' checked={isDone} onChange={tgD}/></td>
    <td>{sd.eng}</td><td>{isSw && sd.kor}</td>
    <td><button onClick={tg}>뜻 {isSw ? '숨기기':'보기'}</button>
    <button onClick={del} className='btn_del'>삭제</button></td>
    </tr>
  )}
