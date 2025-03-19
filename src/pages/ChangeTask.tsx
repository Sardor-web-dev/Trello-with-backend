import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Inputs } from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const ChangeForm = () => {
    const navigate = useNavigate();
    const { id } = useParams(); 

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Inputs>();

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const res = await fetch(`http://localhost:8080/todos/${id}`);
                if (res.ok) {
                    const task = await res.json();
                    setValue("title", task.title);
                    setValue("description", task.description);
                    setValue("column", task.column);
                }
            } catch (err) {
                console.error("Ошибка загрузки задачи:", err);
            }
        };

        if (id) fetchTask(); 
    }, [id, setValue]);

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            const res = await fetch(`http://localhost:8080/todos/${id}`, {
                method: "PUT", 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) navigate(`/`);
        } catch (err) {
            console.error("Ошибка обновления задачи:", err);
        }
    };

    return (
        <div className="flex flex-col bg-gray-400 p-4 rounded-lg items-center gap-2 justify-center">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 items-center justify-center">
                <h1 className="text-3xl font-bold">Edit Task</h1>

                <Input 
                    {...register("title", { required: "Title is required", minLength: { value: 5, message: "Title must be at least 5 characters" } })}
                    className="bg-white border-1 w-70 h-8 rounded-md p-2"
                    type="text"
                    placeholder="Enter title"
                />
                {errors.title && <span className="text-red-500 font-bold">{errors.title.message}</span>}

                <Input 
                    {...register("description")}
                    className="bg-white border-1 w-70 h-8 rounded-md p-2"
                    type="text"
                    placeholder="Enter description"
                />

                <Input 
                    {...register("column", { required: "Column is required" })}
                    className="bg-white border-1 w-70 h-8 rounded-md p-2"
                    type="text"
                    placeholder="Enter column"
                />
                {errors.column && <span className="text-red-500 font-bold">{errors.column.message}</span>}

                <Button className="bg-blue-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-blue-700">
                    Save Changes
                </Button>
            </form>

            <Button type="button" onClick={() => navigate(`/todo/${id}`)} className="bg-red-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-red-700">
                Cancel
            </Button>
        </div>
    );
};

export default ChangeForm;
