
import { useState } from 'react';
import './App.css';
import Formular from './Formular';
 

function App() {
  const [data,zmenData]= useState(JSON.parse(localStorage.getItem("data")))//)
  console.log("rodic",data)
localStorage.setItem("data",JSON.stringify(data))


return(
<>

<Formular 

funkciaPreZmenuDatRodica ={zmenData}/>

<table>
  <th>{"nick"}</th> 
  <th>{"meno"}</th>
  <th>{"priezvisko"}</th>
  <th>{"email"}</th>

  {data.map(
    
    element =><tr> 
                          <td>{element.nick}</td> 
                          <td>{element.meno}</td>
                          <td>{element.priezvisko}</td>
                          <td>{element.email}</td>
                      </tr>)}
          
</table>
</>
)
}

export default App;
