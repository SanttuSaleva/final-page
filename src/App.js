import './App.css';
import {useState, useEffect} from 'react'
import SearchIcon from './search.svg';
import MediaCard from './components/MediaCard'

const URL = 'http://www.omdbapi.com?apikey=INSERKEYHERE'

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [medias, setMedias] = useState([]);


    const searchMedias = async (title) => {
      const response = await fetch(`${URL}&s=${title}`)
      const data = await response.json();

      setMedias(data.Search);
    }
    
    useEffect(() => {
      searchMedias('')
    }, []);


  return (
    <div className="app">
      <h1>IMDb Library</h1>

      <div className="search">
        <input placeholder="Search for Media on IMDb"
        value ={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>

        <img src={SearchIcon}
          alt= "search" 
          onClick={() => searchMedias(searchTerm)}/>
      </div>

      { medias?.length > 0 ? (
          <div className="container">
              {medias.map((media) => (
                <MediaCard media={media}/>
              ))}
          </div>
          ):(
            <div className="empty"> 
              <h2>No media by those search terms</h2>
            </div>
            )
      }
    </div>
  );
};

export default App;
