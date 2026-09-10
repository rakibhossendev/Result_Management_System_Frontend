export interface StudentAPIDataType{
    student_id: number;
    student_roll: number;
    full_name: string;
    cgpa: number;
    semester: number;
}

export interface ApiResponseType{
    success: string;
    message: string;
    data?: StudentAPIDataType;
}