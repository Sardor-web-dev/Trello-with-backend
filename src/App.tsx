import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import FormTask from "./pages/CreateTask";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/create" element={<FormTask />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
