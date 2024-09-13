import { Outlet } from "react-router-dom";
import Nav from "./components/pages/nav";


function App() {
  return (
    <div>
      <div>
        <Nav/>
      </div>
      <Outlet/>
    </div>
  );
}

export default App;
