import { GripVertical } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface TaskCardProps {
	id: string | number;
	description: string;
	created_at: string;
	column: string | number;
	title: string;
	className?: string;
}

export const TaskCard: React.FC<TaskCardProps> = ({ id, title }) => {
	const navigate = useNavigate();
	const [className, setClassName] = useState("");

	const onDragStart = (e: any) => {
		setClassName("bg-red-500");
		setTimeout(() => {
			setClassName("hidden");
		}, 0);

		e.dataTransfer.setData("text/plain", id.toString());
	};

	return (
		<Card
		onClick={() => navigate(`/task/${id}`)}
			id={id.toString()}
			draggable
			onDragStart={onDragStart}
			onDragEnd={(e) => {
				setClassName("flex");
				e.dataTransfer.clearData();
			}}
			className={cn(
				"bg-white shadow-sm cursor-pointer hover:bg-gray-200 ease-in-out transition-all flex items-center p-3 gap-3",
				className
			)}>
			<GripVertical className="text-gray-400" size={16} />
			<CardContent className="p-0 flex-1">{title}</CardContent>
		</Card>
	);
};
