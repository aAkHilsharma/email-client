import Header from "./components/header-component";
import List from "./components/list-component";
import FavoriteScreen from "./screens/favorites-screen";
import HomeScreen from "./screens/home-screen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="h-full px-10 py-4 mx-auto">
        <div className="h-[10%]">
          <Header />
        </div>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/favorites" element={<FavoriteScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
