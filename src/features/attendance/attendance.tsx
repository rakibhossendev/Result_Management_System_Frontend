import type { AttendanceResponseType } from "../../TypeScript/Attendance/attendance"
import AttendanceHome from "../../Pages/Attendance/Attendance-Home";
import { Suspense } from "react";

const attendancePromise = async ():Promise<AttendanceResponseType> => {

    const response = await fetch('http://127.0.0.1:5000/attendance/api/');
    const data: AttendanceResponseType = await response.json();
    return data;
}

export default function Attendance(){
    

    return (
        <>
        <Suspense fallback={<p className="font-bold text-yellow-500">Loading Data.....</p>}>
            <AttendanceHome attendancePromise = {attendancePromise()}></AttendanceHome>
        </Suspense>
        </>
    )
}