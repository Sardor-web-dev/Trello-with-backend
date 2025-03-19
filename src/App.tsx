import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import FormTask from "./pages/CreateTask";
import TaskPage from "./pages/TaskPage";
import ChangeForm from "./pages/ChangeTask";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/create" element={<FormTask />} />
					<Route path="/task/:id" element={<TaskPage />} />
					<Route path="/edit/:id" element ={<ChangeForm/>}/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
