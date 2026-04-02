import { Route, Routes } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import Confirmation from "./pages/Confirmation";
import Movies from "./pages/Movies";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Payment from "./pages/Payment";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
         <Route path="/movies" element={<Movies />} />
         <Route path="/movie/:id" element={<MovieDetails />} />
         <Route path="/booking/:id" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
         
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App