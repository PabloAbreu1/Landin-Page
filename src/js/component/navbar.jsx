import React from "react";

const Navbar = function()  {
    return(
<nav className="navbar navbar-expand-lg text-bg-dark p-3 ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a className="navbar-brand text-light" href="#">Star Bootstrap</a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light " href="#">Abaut</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
       
};
    

export default Navbar;