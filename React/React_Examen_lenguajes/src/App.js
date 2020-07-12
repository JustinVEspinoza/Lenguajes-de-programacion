import React from 'react';
import routes from './Components/Router';
import { useRoutes} from "hookrouter";

import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header.js";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <div>
        <Header />

          {routeResult}
    </div>
  );
}

export default App;
