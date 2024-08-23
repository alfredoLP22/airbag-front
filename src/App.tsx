import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./auth/page/Login";
import RoutePublic from "./private/layout/RoutePublic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoutePublic />}>
          <Route index element={<Login />} />
          {/* <Route path="crear-cuenta" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
