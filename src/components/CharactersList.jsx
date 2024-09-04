import { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListitem";
import styles from './CharacterList.module.css';

const baseUrl = 'https://swapi.dev/api';

const CharacterList = () => {

const [characters, setCharacters] = useState([]);

  useEffect(()=> {
    
    // stop fetch with unmount

    const abortController = new AbortController();

    // signal is additional requirement

   fetch(`${baseUrl}/people`, {signal: abortController.signal})
   .then(res => res.json())
   .then(data => {
    setCharacters(data.results);
   });
   // return is also additional about fetch with unmount
   return() => {
    abortController.abort();
   }
  }, []);

  return(
    <div className={styles.characterList}>
     {characters.map((character, index) => 
     <CharacterListItem key={character.name} id={index + 1} {...character}/>)}
    </div>
  );
}
export default CharacterList;