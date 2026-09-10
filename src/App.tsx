import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Components/ui/Home'
import StudentDashboardURL from './features/student-dashboard/DashboardUrl'

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='student/dashboard/:roll' element={<StudentDashboardURL></StudentDashboardURL>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
