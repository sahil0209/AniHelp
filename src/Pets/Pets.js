import React from 'react';
import './Pets.css'

const pets = (props)=>{
    // const styleCard = {
    //     { color: #bbc3c8; font-family: 'Verdana', sans-serif; font-size: 16px; line-height: 26px; text-indent: 30px; margin: 0; 
    // }
    return(
            <div className="col-lg-4 col-md-5 col-sm-12 text-center">
                    <div className="xyz card text-white mb-3">
                        <img src={props.link} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h1 className="card-title">{props.type}</h1>
                                <p className="abc">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="/petify" className="btn btn-primary btn-lg">Go somewhere</a>
                            </div>
                    </div>
            </div>
    );
}

export default pets;