import Home from "./components/navbar";
import {Routes, Route} from 'react-router-dom';
import Currency from "./pages/currency";
import About from "./pages/about";
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="*" element={<Currency/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;