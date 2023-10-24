import React from "react";
export default function Navbar(){
    return(
        <>
        <div className="mb-5">
           <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top mb-5">
                 <div className="container">
                      <a className="navbar-brand" href="#">React</a>
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon" />
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-4">
                            <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item me-4">
                            <a className="nav-link" href="#">Footer</a>
                            </li>
                          </ul>
                      </div>
                 </div>
           </nav>
        </div>
        </>   
    );
}