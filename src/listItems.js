import React from 'react'
import './listitem.css';

function ListItems(props) {
    const items = props.items;
    const list =  items.map(item=>{
        return(
        <div className="listItems" key = {item.key}>
          <p >
             <input type="text" value= {item.text} id ={item.key} onChange ={(e)=>{
                 props.setUpdate(e.target.value,item.key)
             }}/>
               <span><button type="button" onClick={()=>props.deleteItems(item.key)}>Delete</button></span></p>
         
        </div>
        )
    })
    
    return (
        <div>
            <h1>{list}</h1>
        </div>
    )
}

export default ListItems
