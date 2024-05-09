import "./App.css";
import Home from "./components/home";
import { HomeProvider } from "./context/homeContext";

function App() {
    return (
        <HomeProvider>
            <Home />
        </HomeProvider>
    );
}

export default App;
