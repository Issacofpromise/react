import { useEffect, useState } from "react";

export default function useFt(url) {
var [da, setD]=useState([]);

useEffect(()=>{ fetch(url)
.then(my =>{return my.json()})
.then(dt =>{setD(dt)}) 
}, [])
return da;
}