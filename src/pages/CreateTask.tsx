import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const FormTask = () => {

    const navigate = useNavigate();

    return (
        <>
        <div className="flex flex-col bg-gray-400 p-4 rounded-lg items-center gap-2 justify-center"> 
            <form className="flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold">Create new Task</h1>
                <Input className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
                <Input className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
                <Input className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
                <Input className="bg-white border-1 w-70 h-8 rounded-md p-2" type="text" />
            <Button className="bg-blue-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-blue-700">Create new Task</Button>
            </form>
        <Button onClick={() => navigate('/')} className="bg-red-500 text-white w-50 h-10 rounded-lg cursor-pointer hover:bg-red-700">Exit</Button>
        </div>
        </>
    );
}
 
export default FormTask;