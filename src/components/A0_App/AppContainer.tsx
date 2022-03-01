import {FC} from "react";
import {HashRouter} from "react-router-dom";
import {App} from "./App";
import {Provider} from "react-redux";
import {store} from "../../store/store";

export const AppContainer: FC = () => {
    return (
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    )
}