import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from "@/types";

const regex = {
    title: (value: string) => value.length >= 5,
}

const FormTask = () => {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {   
        try {
            const res = await fetch("http://localhost:8080/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (res.ok) navigate("/");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <>
        <div className="flex flex-col bg-gray-400 p-4 rounded-lg items-center gap-2 justify-center"> 
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold">Create new Task</h1>
                <Input {...register("title", {required:true, validate:regex.title})} className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" placeholder="Enter title" />
                {errors.title && <span className="text-red-500 font-bold">Title must have five simbols</span>}
                <Input {...register("description")} className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" placeholder="Enter description" />
                <Input {...register("column", {required: true})} className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" placeholder="Enter column" />
                {errors.column && <span className="text-red-500 font-bold">Column is required input</span>}
            <Button className="bg-blue-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-blue-700">Create new Task</Button>
            </form>
        <Button type="button" onClick={() => navigate('/')} className="bg-red-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-red-700">Exit</Button>
        </div>
        </>
    );
}
 
export default FormTask;

