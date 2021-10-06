import "./App.css"
import Home from "./Components/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import Header from "./Components/Header"
import { ToastContainer } from "react-toastify"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
