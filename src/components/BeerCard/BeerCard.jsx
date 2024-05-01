import { List } from "../List";
import "./style.css";


export const Card=({beer})=> {
console.log(beer)

    return(
        <article>
            <h2>{beer.name}</h2>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.description}</p>
                <p>{beer.abv}º</p>
                <List list={beer.food_pairing}></List>
                    
                
        </article>
    )
}