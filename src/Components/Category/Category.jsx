import React from 'react'
import {menu} from "./data"
import './Category.css';
import { useNavigate } from 'react-router-dom'
const Category = () => {
  const navigate=useNavigate();
  return (
  <div className='categories'>
    {menu.map((item,id)=>(
      <div className='name' onClick={()=>navigate(item.url)}>
       {item.menu_name}
      </div>
    ))}
  </div>
  )
}
export default Category
// <div className='category'>
//    <ul>
//       <li><a href=""><NavLink to={'/'}>General</NavLink></a></li>
//       <li><a href=""><NavLink to={'/business'}>Business</NavLink></a></li>
//       <li><a href=""><NavLink to={'/entertainment'}>Entertainment</NavLink></a></li>
//       <li><a href=""><NavLink to={'/health'}>Health</NavLink></a></li>
//       <li><a href=""><NavLink to={'/science'}>Science</NavLink></a></li>
//       <li><a href=""><NavLink to={'/sport'}>Sport</NavLink></a></li>
//       <li><a href=""><NavLink to={'/technology'}>Technology</NavLink></a></li>
//    </ul>
// </div>