import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { NestedRoutes } from './components/p1';
import { DynamicUseParams } from './components/p2'
import { MultipleDynamicParams } from './components/p3';
import { OptionalParameters } from './components/p4';
import { NestedDynamicRoutes } from './components/p5';
function DashboardHome() {
return(
  <div>
    <h3>Dashboard Home</h3>
    <p>Default Dashboard Page</p>
  </div>
);
}
function DashboardProfile() {
return(
  <div>
    <h3>Dashboard Profile</h3>
    <p>Profile Page inside Dashboard </p>
  </div>
);
}
function DashboardSettings() {
return(
  <div>
    <h3>Dashboard Settings</h3>
    <p>Setting page inside Dashboard </p>
  </div>
);
}

function Home() {
  return (
    <div> <h1>React Router concepts</h1>
      <ul>
        <li>NestedRoutes</li>
        <li>DynamicUseParams</li>
        <li>MultipleDynamicParams</li>
        <li>OptionalParameters</li>
        <li>NestedDynamicRoutes</li>
      </ul>
      <nav style={StyleSheet.nav}>
        <Link to="/dashboard">
          NestedRoutes
        </Link>
        <Link to="/products/101">
          Dynamic Params
        </Link>
        <Link to="/users/101/orders/5001">
          Multiple params
        </Link>
        <Link to="/profile">
          Optional Params
        </Link>
        <Link to="/profile/rakshitha">
          Optional Params with Value
        </Link>
        <Link to="/courses/reactJs">
          Nested Dynamic Routes
        </Link>
      </nav>
    </div>

  );
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        {/*Nested Routes */}
         <Route
          path="/dashboard"
          element={<NestedRoutes />}
        >
        {/*Index Route */}
        <Route
          path="/dashboard"
          element={<DashboardHome />}
        />
        <Route
          path="profile"
          element={<DashboardProfile />}
        />
        <Route
          path="settings"
          element={<DashboardSettings />}
        />
        </Route>
        {/*Dynamic params */}
         <Route
          path="/products/:id"
          element={< DynamicUseParams/>}
        />
          {/*Multiple Dynamic params */}
         <Route
          path="/users/:userId/orders/:orderId"
          element={<MultipleDynamicParams />}
        />
         {/*optional params */}
         <Route
          path="/profile"
          element={< OptionalParameters/>}
        />
         {/*optional  Dynamic params */}
         <Route
          path="/profile/:username"
          element={<  OptionalParameters/>}
         
        />
        {/*Nested Dynamic routes */}
         <Route
          path="/coursese/:courseId"
          element={<  NestedDynamicRoutes />}
         
        />



      </Routes>
    </BrowserRouter>
  );
}
const styles = {
  nav:{
    display:"flex",
    flexWrap:"wrap",
    gap:"10px",
    marginTop: "20px"
  }
};
export default App
