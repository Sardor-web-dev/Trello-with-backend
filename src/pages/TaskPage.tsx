import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Todo } from "@/types";

const TaskPage = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    const [task, setTask] = useState<Todo | null>(null)

    const Delete = async (taskId: string) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${taskId}`, {
                method: "DELETE",
            });
    
            if (res.ok) {
                navigate("/");
            }
        } catch (err) {
            console.error("Error when you wanted delete task", err);
        }
    };
    

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const res = await fetch(`http://localhost:8080/todos/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setTask(data);
                }
            } catch (err) {
                console.error("Error fetching todo:", err);
            }
        };

        fetchTodo();
    }, [id]);

    if (!task) return <p className="text-center">You Have Not choose Task to open, Please choose Task...</p>;

    return (
        <>
        <div className="flex flex-col items-center p-6 bg-gray-100">
            <div className=" flex flex-col gap-2 bg-white shadow-md rounded-lg p-6 w-96">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <p className="text-gray-600">{task.description || "This task dont have description"}</p>
                <p className="text-sm">Column: {task.column}</p>
                
                <div className="mt-6 flex gap-4">
                    <Button onClick={() => navigate(`/edit/${task.id}`)} className="bg-yellow-500 cursor-pointer hover:bg-yellow-600">
                        Edit
                    </Button>
                    <Button onClick={() => navigate("/")} className="bg-gray-500 cursor-pointer hover:bg-gray-600">
                        Back
                    </Button>
                    <Button onClick={() => Delete(task.id)} className="bg-red-500 cursor-pointer hover:bg-red-600">
                        Delete
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
};

export default TaskPage;
