import { useState } from 'react';

function Formular({funkciaPreZmenuDatRodica}) {
    
    const [textovePole,zmenTextovePole]= useState("") 
    const [textovePole_2,zmenTextovePole_2]=useState("")
    const [textovePole_2_1,zmenTextovePole_2_1]=useState("")
    const [textovePole_3,zmenTextovePole_3]=useState("")
    
    return (
<div className='form'>
        <h1>formular na vloženie noveho uživatela</h1>
  <h3>nick : </h3>
  <input type="text" placeholder="napr:puding|slayer" value={textovePole } onChange={(e)=>{
  zmenTextovePole (e.target.value);
  }}/> 
  
 <br></br>
 <h3>meno : </h3>
   <input type="text" placeholder="napr:janko "  value={textovePole_2} onChange={(e)=>{
  zmenTextovePole_2 (e.target.value) ;
  }}/>
  <h3>priezvisko : </h3>
  <input type="text" placeholder="mrkvička :"  value={textovePole_2_1} onChange={(e)=>{
  zmenTextovePole_2_1 (e.target.value);
  }}/> 

  <br></br>
  <h3>email : </h3>
  <input type="text" placeholder="xxx@email adress.com"  value={textovePole_3} onChange={(e)=>{
  zmenTextovePole_3 (e.target.value) ;

  }}/> 
  <br></br>
  

  <button id='send' onClick={()=> {
    if (textovePole===""||textovePole_2===""||textovePole_2_1===""||textovePole_3==="")
      {return alert("skontroluj či si zadal všetky udaje ")}
    funkciaPreZmenuDatRodica(data =>{

    return  data.concat 
                        ({"nick":textovePole,
                        "meno":textovePole_2,
                        "priezvisko":textovePole_2_1,
                        "email":textovePole_3})
    })}}>pošli formular</button> 
    
    <button id='reset' onClick={()=> funkciaPreZmenuDatRodica(data=>[])}>
      vymaž data
    </button>
  </div>

    );
  }
  export default Formular
  