import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="#" className="brand-link">
                <img src={process.env.PUBLIC_URL+'/dist/img/AdminLTELogo.png'} alt="Cloud Sales Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
                <span className="brand-text font-weight-light">Gigantes del Pacífico</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={process.env.PUBLIC_URL+'/dist/img/avatar5.png'} className="img-circle elevation-2" />
                    </div>
                    <div className="info">
                        <span className="d-block text-light">Hernán Páez</span>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">ACCESOS</li>
                        
                        
                        <li className="nav-item">
                            <Link to="/productos"  className="nav-link">
                                <i className="nav-icon fas fa-box" />
                                <p>Productos</p>
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </aside>
    );
}
export default Sidebar;