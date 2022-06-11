import {React,useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Adduser = () => {

    let navigate=useNavigate()

    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:"",
    });

    const {name,username,email,phone,website}=user;

    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    };
    
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3001/users",user);
        navigate('/');
    }
    return (
        <div className='container'>
           <div className='w-75 mx-auto shadow p-5'>
               <h2 className='text-center mb-4'>Kullanıcı Ekle</h2>
               <form onSubmit={e=>onSubmit(e)}>
                   <div className='form-group m-2' >
                       <input
                       type="text"
                       className='form-control form-control-lg'
                       placeholder='İsminizi Giriniz'
                       name="name"
                       value={name}
                        onChange={e=>onInputChange(e)}
                       />
                   </div>
                   <div className='form-group m-2'>
                       <input
                       type="text"
                       className='form-control form-control-lg'
                       placeholder='Kullanıcı adınızı Giriniz'
                       name="username"
                       value={username}
                        onChange={e=>onInputChange(e)}
                       />
                   </div>
                   <div className='form-group m-2'>
                       <input
                       type="email"
                       className='form-control form-control-lg'
                       placeholder='E-mail adresinizi giriniz.'
                       name="email"
                       value={email}
                        onChange={e=>onInputChange(e)}
                       />
                       </div>
                       <div className='form-group m-2'>
                       <input
                       type="text"
                       className='form-control form-control-lg'
                       placeholder='Telefon Numaranızı Giriniz'
                       name="phone"
                       value={phone}
                        onChange={e=>onInputChange(e)}
                       />
                       </div>
                       <div className='form-group m-2'>
                       <input
                       type="text"
                       className='form-control form-control-lg'
                       placeholder='Website Adresinizi Giriniz'
                       name="website"
                       value={website}
                        onChange={e=>onInputChange(e)}
                       />
                   </div>
                   <button className='btn btn-primary w-50 w-100 '>Kullanıcı Ekle</button>
               </form>
           </div>
        </div>
    )

}

export default Adduser;