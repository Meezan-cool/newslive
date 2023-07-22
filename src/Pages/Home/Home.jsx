import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./Home.css"
const Home = () => {
  const [newsData, setNewsData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 'https://newsapi.org/v2/top-headlines?country=us&apiKey=af6d351a9f0e43cb982adf888c04f5f2'
        // const API_KEY = 'af6d351a9f0e43cb982adf888c04f5f2';
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=af6d351a9f0e43cb982adf888c04f5f2');
        setNewsData(response.data.articles);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='businessContainer'>
      <h1>General</h1>
      <div className='Super_Map_container'>
        {newsData.map((article, index) => (
          <div className='Map_container' key={index}>
            <h2><span>{index+1}.</span>{article.title}</h2>
            <img src={article.urlToImage} alt="" />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home