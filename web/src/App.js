import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";

import ShowcasePage from "./components/ShowcasePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<ShowcasePage />}>
                        {/* 
                        <Route path="teams" element={<Teams />}>
                            <Route path=":teamId" element={<Team />} />
                            <Route path="new" element={<NewTeamForm />} />
                            <Route index element={<LeagueStandings />} />
                        </Route>
                        */}
                    </Route>
                </Routes>
            </Router>
            <Footer />
        </>
    );
}

export default App;
