import React from "react";
import {Link} from "react-router-dom";

function SideNav() {
  return (
    <div className="collapse navbar-collapse navbar-ex1-collapse">
      <ul className="nav navbar-nav side-nav">
        <li className="active">
          <Link to="/"> <i className="fa fa-fw fa-dashboard" /> Dashboard</Link>
        </li>
        <li>
          <Link to="/charts"> <i className="fa fa-fw fa-bar-chart-o" /> Charts</Link>
        </li>
        <li>
          <Link to="/tables"> <i className="fa fa-fw fa-table" /> Tables</Link>
        </li>
        <li>
          <Link to="/settings"> <i class="fa fa-sliders" aria-hidden="true" /> Settings</Link>
        </li>
        <li>
          <Link to='/wall'> <i class="fa fa-anchor" aria-hidden="true" /> Wall</Link>
        </li>
        <li>
          <Link to='/profiles'> <i class="fa fa-users" aria-hidden="true" /> Profiles</Link>
        </li>
        <li>
          <Link to='/marquee/This is what a Marquee does!'> <i class="fa fa-bullhorn" aria-hidden="true"></i> Look What I Can Do</Link>
        </li>
      </ul>
    </div>);  
}

export default SideNav;
