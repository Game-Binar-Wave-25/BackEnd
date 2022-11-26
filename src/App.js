import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { 
  FirebaseGameSuit,
  FirebaseGameSuitTable 
} from './pages'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/firebase/gameSuit' element={<FirebaseGameSuit/>}/>
        <Route path='/firebase/gameSuitTable' element={<FirebaseGameSuitTable/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;
