import "./App.css"
import Home from "./Components/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/update/:id" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
