import axios from "axios";
const instance =axios.create({
    baseURL:"https://newsapi.org/v2/top-headlines?"
})
export default instance;
// https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=af6d351a9f0e43cb982adf888c04f5f2   --- BBC
// https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=af6d351a9f0e43cb982adf888c04f5f2   ---Business
// https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---Entertainment
// https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---Health
// https://newsapi.org/v2/top-headlines?country=us&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---General
// https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---Science
// https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---Sports
// https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=af6d351a9f0e43cb982adf888c04f5f2  ---Technology