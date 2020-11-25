import "./App.css";
import Box from "@material-ui/core/Box";
import Controls from "./Controls/Conrtols";

function App() {
    // TODO: Find a better way to align content to the middle
    return (
        <div className="App">
            <Box>
            <Controls />
            </Box>
        </div>
    );
}

export default App;
