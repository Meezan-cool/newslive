import React,{useState,useEffect} from 'react'
import axios from 'axios';
import "./../Pages.css"
const Health = () => {
  // https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const API_KEY = 'af6d351a9f0e43cb982adf888c04f5f2';
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c07892fc401b4060b4d3f0328e4b4786');
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
      <h1>Top <span>Health</span> <span>HeadLines</span> </h1>
      <div className='Super_Map_container1'>
      {newsData.map((article, index) => (
          <div className='Map_container1' key={index}>
           <a href={article.url} target="_blank" >
          {article.urlToImage ? (
             <img src={article.urlToImage} alt="" />
          ) : (
            <img src={require("./../no-imagee.png")} alt="" />
          )}
           <div className='detail'>
           <h2>{article.title.slice(0,50)}...</h2>
           
             {/* <h4> {article.publishedAt.slice(10,11)}, {article.publishedAt.slice(11,16)}, {article.publishedAt.slice(0,10)}</h4> */}
             <h6> {new Date(article.publishedAt).toGMTString()}</h6>
           </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Health