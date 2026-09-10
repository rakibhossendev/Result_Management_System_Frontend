import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { ApiResponseType } from "../../TypeScript/SearchDataType/HomeDataType"

export default function StudentSearch(){
    const navigate = useNavigate()
    const [roll,setRoll] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);
    const [error,setError] = useState<string>("");

    const handleSearch = async ():Promise<void> => {
        if(!roll.trim()){
            setError("Please Enter your roll");
            return
        }

        setLoading(true);
        setError('');
        try{
            const response = await fetch("http://127.0.0.1:5000/api/student/search",{
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    student_roll: roll,
                }),
            })
            const data: ApiResponseType = await response.json()
            if(!response.ok){
                setError(data.message);
                return;
            }
            if(data.success){
                navigate(`/student/dashboard/${roll}`);
                // console.log("Data founded",data);
                setError(data.message)
            }
            
        }catch(error){
            console.log(error);

            setError("Unable to connect server");

        }finally{
            setLoading(false);

        }
    };
    
    return (
        <div className="main-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Search Student</h1>

                <div className="space-y-4">
                    <input type="number" placeholder="Enter your roll" value={roll} 
                    onChange={(e) => setRoll(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === "Enter"){
                            handleSearch();
                        }
                    }}

                    className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button onClick={handleSearch} disabled={loading} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"> {loading ? "Searching...":"Search"}</button>

                    {error &&(
                        <p>{error}</p>
                    )}
                </div>
            </div>
        </div>
    )
}