export const List=({list})=>{
   
    
    return (<ul>
        {list.map((ingredient)=>{return <li>{ingredient}</li>})}
    </ul>)

}