import { Route, Routes } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<h1>Profile Page</h1>} />
            <Route path="/Movies" element={<h1>Movies</h1>} />
          </Routes>

        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
