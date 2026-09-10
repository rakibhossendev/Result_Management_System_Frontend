import { useParams } from "react-router-dom"

import type { StudentDataType } from "../../TypeScript/StudentDataType/StudentData"
import { useEffect, useState } from "react";
import StudentDashboardHome from "./StudentDashboardHome";


export default function StudentDashboard(){
    const {roll} = useParams();
    const [student,setStudent] = useState<StudentDataType | null>(null);

    useEffect(()=> {
        if(!roll) return;
        const studentData = async () => {
            const response = await fetch(`http://127.0.0.1:5000/student/data/api/${roll}`);
            const data = await response.json();
            setStudent(data.data);
        };
        studentData()
    },[roll])

    // console.log(typeof student)

    return (
        <div>
            <StudentDashboardHome student={student}></StudentDashboardHome>
        </div>
    )
}