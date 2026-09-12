
import type { StudentDataType } from "../../TypeScript/StudentDataType/StudentData";
import StudentDashboardNavCard from "./Card";

interface StudentDataProps {
  student: StudentDataType | null;
}

export default function StudentDashboardHome({
  student,
}: StudentDataProps) {
  if (!student) {
    return (
      <section className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-[var(--medium-gray)]">Loading...</p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div
        className="animate-fade-in-up relative overflow-hidden rounded-[var(--radius-2xl)] p-6 shadow-[var(--shadow-xl)] sm:p-8"
        style={{ background: "var(--gradient-primary)" }}
      >
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-16 right-24 h-32 w-32 rounded-full bg-white/5" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              Student Dashboard
            </span>

            <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Welcome back, {student.student_name}
            </h1>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/80">
              Access your attendance, marks and academic results from your
              dashboard.
            </p>
          </div>

          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-2xl font-bold text-white shadow-lg backdrop-blur-sm">
            {student.student_name?.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>

      {/* Student Information */}
      <div className="stagger mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--medium-gray)]">
            Roll Number
          </p>

          <p className="mt-2 text-xl font-bold text-[var(--text-dark)]">
            {student.student_roll}
          </p>

          <div className="mt-3 h-1 w-8 rounded-full bg-[var(--primary-color)] transition-all duration-300 group-hover:w-14" />
        </div>

        <div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--medium-gray)]">
            Semester
          </p>

          <p className="mt-2 text-xl font-bold text-[var(--text-dark)]">
            {student.semester}
          </p>

          <div className="mt-3 h-1 w-8 rounded-full bg-[var(--secondary-color)] transition-all duration-300 group-hover:w-14" />
        </div>

        <div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-md)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--medium-gray)]">
            Group
          </p>

          <p className="mt-2 text-xl font-bold text-[var(--text-dark)]">
            {student.group || "N/A"}
          </p>

          <div className="mt-3 h-1 w-8 rounded-full bg-[var(--success-color)] transition-all duration-300 group-hover:w-14" />
        </div>
      </div>

      {/* Quick Access */}
      <div className="animate-fade-in-up mt-10">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--primary-color)]">
              Quick Access
            </p>

            <h2 className="mt-1 text-2xl font-bold text-[var(--text-dark)]">
              Academic Overview
            </h2>

            <p className="mt-1 text-sm text-[var(--medium-gray)]">
              Quickly access your academic information.
            </p>
          </div>
        </div>

        <StudentDashboardNavCard />
      </div>
    </section>
  );
}

