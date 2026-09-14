import { use, useState } from "react";
import SubjectName from "../../Components/Attendance/InputSubjectName";
import type { AttendanceResponseType } from "../../TypeScript/Attendance/attendance";
import ShowAttendanceTable from "../../Components/Attendance/ShowAttendanceTable";
import BackToDashboardButton from "../../Components/common/BackToDashboardButton";

interface AttendanceResponseTypeProps {
    attendancePromise: Promise<AttendanceResponseType>;
}

export default function AttendanceHome({ attendancePromise }: AttendanceResponseTypeProps) {
    const attendanceDate = use(attendancePromise);
    const subjects = [...new Set(attendanceDate.data.map(item => item.subject_name))];
    const [selectSubject, updateSelectSubject] = useState<string>("");

    const filterSelectedSubject = attendanceDate.data.filter(data => data.subject_name === selectSubject);


    return (
        <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="animate-fade-in-down mb-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div>
                        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--primary-rgba-20)] bg-[var(--primary-light)] px-4 py-2 text-sm font-semibold text-[var(--primary-color)]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--primary-color)]" />
                            Attendance Overview
                        </div>

                        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--text-dark)] sm:text-4xl">
                            Attendance
                        </h1>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--medium-gray)] sm:text-base">
                            Select a subject to view your attendance records and track
                            your attendance progress.
                        </p>
                    </div>

                    <div className="shrink-0 sm:pt-2">
                        <BackToDashboardButton />
                    </div>

                </div>
            </div>

            {/* Subject Selector */}
            <div className="animate-fade-in-up delay-100 rounded-[var(--radius-2xl)] border border-[var(--border-light)] bg-[var(--white)] p-5 shadow-[var(--shadow-md)] transition-all duration-300 hover:shadow-[var(--shadow-lg)] sm:p-6">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[var(--primary-color)]">
                            Subject
                        </p>

                        <h2 className="mt-1 text-lg font-bold text-[var(--text-dark)] sm:text-xl">
                            Choose a subject
                        </h2>

                        <p className="mt-1 text-sm text-[var(--medium-gray)]">
                            Select a subject to filter your attendance records.
                        </p>
                    </div>

                    <div className="w-full md:max-w-sm">
                        <SubjectName
                            subjects={subjects}
                            selectedSubject={selectSubject}
                            updateSelectSubject={updateSelectSubject}
                        />
                    </div>

                </div>
            </div>

            {/* Attendance Table */}
            <div className="animate-fade-in-up delay-200">
                <ShowAttendanceTable
                    filterSelectedSubject={filterSelectedSubject}
                />
            </div>

        </section>
    )


}