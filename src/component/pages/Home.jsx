import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Home=()=>{
    const [users,setUsers]=useState([]);
    
    useEffect(()=>{
        loadUser();
    },[]);

    const loadUser=async()=>{
        const res=await axios.get("http://localhost:3001/users");
        setUsers(res.data);
    }
  
    const deleteUser=async (id)=>{
        await axios.delete(`http://localhost:3001/users/${id}`);
        loadUser();
    }   
    
    return(
        <div className='container'>
                <h1>Home Page</h1>
                <table className='table'>
  <thead>
    <tr className='bg-dark text-white'>
      <th scope="col">#</th>
      <th scope="col">İsim</th>
      <th scope="col">Kullanıcı Adı</th>
      <th scope="col">Email</th>
      <th scope="col">Butonlar</th>
    </tr>
  </thead>
  <tbody>
   {users.map((user,index)=>(
       <tr key={index}>
           <th scope="row">{index+1}</th>
           <td>{user.name}</td>
           <td>{user.username}</td>
           <td>{user.email}</td>
           <td>
               <Link className="btn btn-primary m-1"  to={`user/${user.id}`}><i className="fa-solid fa-eye" ></i></Link>
               <Link className="btn btn-outline-primary m-1" to={`user/edit/${user.id}`} ><i className="fa-solid fa-pen"></i></Link>
               <Link className="btn btn-danger m-1" to="/"><i className="fa-solid fa-trash-can" onClick={()=>{deleteUser(user.id)}}></i></Link>
           </td>
       </tr>
   ))}
  </tbody>
</table>
                
        </div>
    )
}

export default Home;