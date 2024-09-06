import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CasinoLanding } from "./pages/casino-landing"
import { Slots } from "./pages/slots"
import { UkuleleLayout } from "./layouts/ukulele-layout"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UkuleleLayout><CasinoLanding /></UkuleleLayout>} />
          <Route path="/casino-landing" element={<UkuleleLayout><CasinoLanding /></UkuleleLayout>} />
          <Route path="/slots" element={<UkuleleLayout><Slots /></UkuleleLayout>} />
          <Route path="/slots/:provider" element={<UkuleleLayout><Slots /></UkuleleLayout>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
