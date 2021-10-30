import "./App.css"
import Home from "./Components/Home"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap-grid.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Archive from "./Components/Archive"

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/update/:id" component={Home} />
        <Route path="/archive" component={Archive} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
