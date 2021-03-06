import React, { useEffect,useState } from 'react';
import './Index.css';
const index = ()=>{
    const [isActive, setIsActive] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            setIsActive(window.scrollY>0);
            console.log(window.scrollY);
        });
    },[]);
    return(
        <div>
        <header className={isActive ? "scrolling-active":""}>
        <div className="container">
            <nav className="nav">
                <i className="fa fa-paw"></i>
                <a href="index.html" className="logo">AniHelp</a>
                <ul className="nav-list">
                    <li>
                        <a href="index.html" className="nav-link">Info</a>
                    </li>
                    <li>
                        <a href="" className="nav-link">Community</a>
                    </li>
                    <li>
                        <a href="" className="nav-link">Donate</a>
                    </li>
                    <li>
                        <a href="" className="nav-link">Log In</a>
                    </li>
                    <li>
                        <a href="" className="nav-link">Sign Up</a>
                    </li>
                </ul>
            </nav>
        </div>
        </header>
        <header className="hero"></header>
    
    </div>
    );

    
}

export default index;