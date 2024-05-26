import { React , useEffect, useState }from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/variables.css';
import HeroSection from './components/HeroSection/HeroSection';
import { fetchGenreList, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';

const App = () => {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genreList, setGenreList] = useState([]);
  
  const generatedata = async () => {
    setTopAlbums(await fetchTopAlbums());
    setNewAlbums(await fetchNewAlbums());
    setSongs(await fetchSongs());
    setGenreList(await fetchGenreList());
  }


  useEffect(() => {
    generatedata();
  }, [])
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <div style={{marginBottom: '30px'}}>
        <Section data={topAlbums} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <Section data={newAlbums} title="New Albums" />
      </div>
    </div>
  );
};

export default App;
