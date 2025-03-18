import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormTask = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        column: ""
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:8080/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) navigate("/");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
        <div className="flex flex-col bg-gray-400 p-4 rounded-lg items-center gap-2 justify-center"> 
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold">Create new Task</h1>
                <Input onChange={handleChange} value={formData.title} name="title" className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
                <Input onChange={handleChange} value={formData.description} name="description" className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
                <Input onChange={handleChange} value={formData.column} name="column" className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
            <Button className="bg-blue-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-blue-700">Create new Task</Button>
            </form>
        <Button type="button" onClick={() => navigate('/')} className="bg-red-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-red-700">Exit</Button>
        </div>
        </>
    );
}
 
export default FormTask;

