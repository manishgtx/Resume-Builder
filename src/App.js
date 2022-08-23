import Edit from "./components/Edit";
import Show from "./components/Show";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Edit/>}/>
      <Route path='/show' element={<Show/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
