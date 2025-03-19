import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarHeader,
} from "@/components/ui/sidebar";

import { Link } from "react-router-dom";

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarHeader>
			<div>Trello</div>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
				<Link to="/">Home</Link>
					<Link to="">Todo List</Link>
					<Link to="">Column</Link>
					<Link to="">Done</Link>
					<Link to="">Todo</Link>
					<Link to="">In Progress</Link>
				</SidebarGroup>
				<SidebarGroup>
				<Link to="/create">Add Task</Link>
				<Link to="">About Us</Link>
				</SidebarGroup>
			</SidebarContent>
			<SidebarFooter>footer</SidebarFooter>
		</Sidebar>
	);
}

