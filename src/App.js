import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authenticatiion.component";
import { Routes, Route } from 'react-router-dom'

const Shop = () => {
  return (
    <h1>THIS IS SHOP</h1>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <Navigation/> }>
        <Route index element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
        <Route path="auth" element={ <Authentication/> } />
      </Route>
    </Routes>
  )
}

export default App;
