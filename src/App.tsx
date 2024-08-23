import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/page/Login";
import RoutePublic from "./private/layout/RoutePublic";
import RouteProtected from "./private/layout/RouteProtected";
import Dashboard from "./private/pages/Dashboard/page/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutePublic />}>
          <Route index element={<Login />} />
          {/* <Route path="crear-cuenta" element={} /> */}
        </Route>

        <Route path="/admin" element={<RouteProtected />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
