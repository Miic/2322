import React from 'react'

export default class Menu extends React.Component{
    render(){

        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
                <a className="navbar-brand" href="#">Tracker</a>
                <button className="navbar-toggler" type="button" 
                        data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Reactions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Add</a>
                        </li>   
                    </ul>
                </div>  
<<<<<<< HEAD
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" 
                        placeholder="Search" aria-label="Search" />>
                    <button class="btn btn-outline-success my-2 my-sm-0" 
=======
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" 
                        placeholder="Search" aria-label="Search" />>
                    <button className="btn btn-outline-success my-2 my-sm-0" 
>>>>>>> B1
                        type="submit">Search</button>
                </form>
            </nav>
        );
    }
}