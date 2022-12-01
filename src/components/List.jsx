export const List=({list})=>{
   
    
    return (<ul className="has-text-justified">
        {list.map((ingredient)=>{return <li>{ingredient}</li>})}
    </ul>)

}