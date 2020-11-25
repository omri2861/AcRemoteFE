import "./App.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Controls from "./Controls/Conrtols";
import Screen from "./Screen";

function App() {
    // TODO: Find a better way to align content to the middle
    return (
        <div className="App">
            <Paper elevation={10}>
                <Screen />
                <Controls />
            </Paper>
        </div>
    );
}

export default App;
