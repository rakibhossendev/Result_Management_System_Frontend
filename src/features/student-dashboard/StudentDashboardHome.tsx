import type { StudentDataType } from "../../TypeScript/StudentDataType/StudentData";
import StudentDashboardNavCard from "./Card";

interface StudentDataProps {
    student: StudentDataType | null;
}

export default function StudentDashboardHome({student}: StudentDataProps) {

    if (!student) {
        return <p>Loading...</p>;
    }

    return (
        <section>
            <h1>Welcome {student.student_name}</h1>
            <h2>Roll: {student.student_roll}</h2>
            <h2>Semester: {student.semester}</h2>
            <h2>Group: </h2>

            {/* Three student nav card add here. [view CGPA,View Attendeance, View Marks] */}
            <StudentDashboardNavCard></StudentDashboardNavCard> 
        </section>
    );
}