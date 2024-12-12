import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageLayout from "./components/shared/layout/PageLayout";
import CurrentClean from "./components/CurrentClean";
import PageContentDisplay from "./components/shared/layout/PageContentDisplay";
import Properties from "./components/Properties";
import Schedules from "./components/Schedules";
import CleaningDetailsPage from "./components/CleaningDetailsPage";

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<PageLayout />}>
            <Route index element={<PageContentDisplay />} />
            <Route path="current-cleans" element={<CurrentClean />} />
            <Route path="properties" element={<Properties />} />
            <Route path="schedules" element={<Schedules />} />
            <Route
              path="cleaning-details-page"
              element={<CleaningDetailsPage />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
