import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import StudentDashboardURL from './features/student-dashboard/DashboardUrl'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from 'react-toastify';
import Attendance from './features/attendance/attendance';

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home></Home>}></Route>
					<Route path='student/dashboard/:roll' element={<StudentDashboardURL></StudentDashboardURL>}></Route>
					<Route path='student/attendance/:roll' element={<Attendance></Attendance>}></Route>
				</Routes>
			</BrowserRouter>
			
			<ToastContainer></ToastContainer>

		</>
	)
}

export default App
