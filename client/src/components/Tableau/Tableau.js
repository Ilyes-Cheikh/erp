import React ,{useState }from 'react';
import Table from 'react-bootstrap/Table' ;
import TwoButtons from '../TwoButtons';
import TextEditer from './TextEditer';
function Tableau (){
    const [style,setStyle] =  useState("none")  
    const [bg,setBg] =  useState("transparent")  
    const [table,setTable] = useState([[123,123],[[124,123],[123,543]]])
    return (
   <>

        <Table striped bordered hover>
  <thead>
  <tr>
    {
     table[0].map((el,index)=>
      <th> {<TextEditer defaultValue={el}/>} </th>
    )
    }
  </tr>
  </thead>
  <tbody>
    
      
      {
     table[1].map(el=>
      
      <tr>
      {
        el.map(ele=>
          <th> {<TextEditer defaultValue={ele}/>} </th>
        )
      }
      </tr>
    
      )

    }
       
      

    
    
    
  </tbody>
</Table>
<TwoButtons/>
</>
    )
}
export default Tableau ;