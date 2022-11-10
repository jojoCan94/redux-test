import React from "react"
import { Provider } from "react-redux/es/exports"
import "./App.css"
import Home from "./components/home/Home"
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home />
      </div>
    </Provider>
  )
}

export default App
