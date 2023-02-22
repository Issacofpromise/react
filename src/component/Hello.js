import React, {useState} from 'react';
import Ur from './User';

const Hel=function({age}){ console.log({age});
const [me,na]=useState('Ahn');
//const [cd,set]=useState({age});
const ment=age>=40?'중장년입니다.':'청년입니다.';
return ( <>
<h2>{me}({age}세) : {ment}</h2>
<Ur mi={me} />
<button onClick={()=>{na(me=='se'?'Yeon':'se');console.log(me)
//set(cd+1);
}}>change</button>
</> ) }
export default Hel;
