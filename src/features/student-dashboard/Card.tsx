export default function StudentDashboardNavCard() {
    return (
        <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Attendance Card */}
            <a
                href="/student/attendance"
                className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--primary-light)] text-xl text-[var(--primary-color)] transition-transform duration-300 group-hover:scale-110">
                    📋
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--text-dark)]">
                    View Attendance
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
                    Check your attendance records, attendance percentage,
                    and semester-wise attendance information.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)]">
                    View Attendance
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </a>


            {/* Marks Card */}
            <a
                href="/student/marks"
                className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--secondary-light)] text-xl text-[var(--secondary-dark)] transition-transform duration-300 group-hover:scale-110">
                    📊
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--text-dark)]">
                    View All Marks
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
                    Explore your subject-wise marks, individual assessments,
                    and detailed academic performance.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)]">
                    View Mark Details
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </a>


            {/* Result Card */}
            <a
                href="/student/result"
                className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--success-light)] text-xl text-[var(--success-color)] transition-transform duration-300 group-hover:scale-110">
                    🎓
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--text-dark)]">
                    View Your Result
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
                    View your semester results, GPA, CGPA, grades,
                    and complete academic result summary.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)]">
                    View Result
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </a>


            {/* Profile Card */}
            <a
                href="/student/profile"
                className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
            >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--info-light)] text-xl text-[var(--info-color)] transition-transform duration-300 group-hover:scale-110">
                    👤
                </div>
                <h3 className="mt-5 text-lg font-bold text-[var(--text-dark)]">
                    Student Information
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
                    View your personal information, department,
                    semester, roll number, and academic profile.
                </p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--primary-color)]">
                    View Profile
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                    </span>
                </div>
            </a>
        </section>
    );
}