import {useLocation, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect} from "react";

const CharacterDetails = () => {
const {id} = useParams();
const location = useLocation();
const navigate = useNavigate();
const [character, setCharacters] = useState({});

console.log(location.pathname);


useEffect(() => {
  fetch(`https://swapi.dev/api/people/${id}`)
  .then(res => {
    if(!res.ok) {
      throw new Error('Not Found')
    }
    return res.json();
  })
  .then(setCharacters)
  .catch((err) => {
      navigate('/404')
  });
}, [id]);

return(
 <>

 <h1>{character.name}</h1>
 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eos rem quae suscipit dolor saepe? Eveniet, sapiente officia? Neque porro hic est consequuntur voluptatem, cumque maxime ducimus culpa vel blanditiis sed natus. Dicta, officia id aliquid, illo sed ipsam accusantium aut unde fugit quasi ab! Sint minima nesciunt molestiae et?</p>
 
 </>);
}

export default CharacterDetails;