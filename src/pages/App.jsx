import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./home/login"
import Create from "./home/criar"

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Login />} />
          <Route path="cadastrar" element={<Create />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App