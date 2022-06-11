import React from 'react'
import { Link,NavLink } from 'react-router-dom'
const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">React CRUD APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-hidden="true" to="/">Anasayfa</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-hidden="true" to="/about" >Hakkında</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link " aria-hidden="true" to="/contact" > İletişim</NavLink>
                        </li>
        
                        
                        
                    </ul>
                </div>
               
                <Link className='btn btn-outline-light w-20' to="/user/add">Yeni Kullanıcı Ekle</Link>
                
            </div>
        </nav>

    )
}

export default Navbar;