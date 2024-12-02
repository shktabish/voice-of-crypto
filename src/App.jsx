import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from './pages/Home';
import Discover from "./pages/Discover";

export default function App() {
  return (
    <>
      {/* <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:title" element={<Discover />} />
          </Routes>
      <Footer /> */}
      <div className="h-full w-full flex justify-center items-center" >
        Side Under Maintenance 
      </div>
    </>
  )
}