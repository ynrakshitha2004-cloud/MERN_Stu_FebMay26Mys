//Nested Routes
//a route inside a another route 
//Dashboard - profile / settings /reports
import {Link, Outlet } from "react-router-dom";
export function NestedRoutes(){
    return(
        <div>
            <h2>Nested Routes</h2>
            <nav>
                <Link to="/dashboard">Home</Link> | {' '}
                 <Link to="/dashboard/profile">profile</Link> | {' '}
                  <Link to="/dashboard/settings">Settings</Link> | {' '}
                  <hr />
                  {/* <Outlet /> is the place wher matched the child routes will render */}
                  {/* without outlet child routes will not appear inside the parent Layout */
                  }
                  <Outlet /> 
            </nav>
        </div>
    )
}