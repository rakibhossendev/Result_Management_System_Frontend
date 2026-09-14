export interface AttendanceDataType{
    attendance_date: string;
    attendance_id: number;
    status: "P" | "A";
    student_id: number;
    student_roll: number;
    subject_name: string;
}

export interface AttendanceResponseType{
    data: AttendanceDataType[];
    success: boolean;
    total: number;
}
// {
//   "data": [
//     {
//       "attendance_date": "2026-09-13",
//       "attendance_id": 1,
//       "status": "P",
//       "student_id": 1,
//       "student_roll": 322112,
//       "subject_id": "Python Programming"
//     },
//     {
//       "attendance_date": "2026-09-13",
//       "attendance_id": 2,
//       "status": "P",
//       "student_id": 1,
//       "student_roll": 322112,
//       "subject_id": "Mathematics - 2"
//     }
//   ],
//   "success": true,
//   "total": 2
// }