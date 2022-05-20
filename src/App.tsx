import React, {FunctionComponent} from "react"

export interface AppProps {
  title?: string
}

const App:FunctionComponent<AppProps> = () => {
    return (
        <div>
            <h2>Custom component</h2>
        </div>
    );
};

export default App
