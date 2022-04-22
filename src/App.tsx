import { hot } from "react-hot-loader";
import React, {FunctionComponent} from "react"
import "theme.less"

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

export default hot(module)(App);
