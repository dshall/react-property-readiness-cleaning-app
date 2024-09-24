import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLayout from "./components/shared/layout/PageLayout";
import CurrentClean from "./components/CurrentClean";
import PageContentDisplay from "./components/shared/layout/PageContentDisplay";
import Properties from "./components/Properties";


function App() {
  return (
    <div>
      <Router basename="/"> 
        <Routes>
          <Route path="/" element={<PageLayout />}>
          <Route index element={<PageContentDisplay />} />
          <Route path="current-cleans" element={<CurrentClean />} />
          <Route path="properties" element={<Properties />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
