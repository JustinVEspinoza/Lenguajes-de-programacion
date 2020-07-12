import React from 'react';
import routes from './Router';
import {useRoutes, A } from "hookrouter";
import 'bootstrap/dist/css/bootstrap.css';
function Header() {
	  const routeResult = useRoutes(routes);
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
	  <ul className="navbar-nav">
	    <li className="nav-item ">
	      <a href="http://localhost:3000/Examen/listado_producto" className="nav-link" > Productos React</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="http://localhost:3000/Examen/listado_Guia">Guia React </a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="http://localhost:4200/Examen">Productos Angular</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="http://localhost:4200/Examen/Guia">Guia Angular</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="http://localhost:8084/Examen/producto.do?method=getListado">Productos Struts</a>
	    </li>
	    <li className="nav-item">
	      <a className="nav-link" href="http://localhost:8084/Examen/guia.do?method=getListado">Guia Struts</a>
	    </li>
	  </ul>
</nav>

  );
}

export default Header;