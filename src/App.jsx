import {Routes, Route} from 'react-router-dom'
import LoginPage from './pages/loginPage';

const App = () => {
  return (
//     <div className="bg-blue-500 text-4xl font-bold py-2 px-4 rounded">
//     Hello, Tailwind CSS!
// </div>
 <Routes>
      <Route path='/' element={<LoginPage/>}/>
    </Routes>
  )
}

export default App
