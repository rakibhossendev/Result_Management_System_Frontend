import { FiAward, FiBarChart2, FiCalendar } from "react-icons/fi";
import {Link,useParams } from "react-router-dom";

export default function StudentDashboardNavCard() {
  const {roll} = useParams<{roll: string}>();

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {/* Attendance Card */}
      <Link
        to={`/student/attendance/${roll}`}
        className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--primary-light)] text-xl text-[var(--primary-color)] transition-transform duration-300 group-hover:scale-110">
            <FiCalendar />
          </div>

          <span className="text-xl text-[var(--light-gray)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-color)]">
            →
          </span>
        </div>

        <h3 className="mt-6 text-lg font-bold text-[var(--text-dark)]">
          View Attendance
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
          Check your attendance records and semester-wise attendance
          percentage.
        </p>

        <div className="mt-5 text-sm font-semibold text-[var(--primary-color)]">
          View Details
        </div>
      </Link>

      {/* Marks Card */}
      <a
        href="/student/marks"
        className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--secondary-light)] text-xl text-[var(--secondary-dark)] transition-transform duration-300 group-hover:scale-110">
            <FiBarChart2 />
          </div>

          <span className="text-xl text-[var(--light-gray)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-color)]">
            →
          </span>
        </div>

        <h3 className="mt-6 text-lg font-bold text-[var(--text-dark)]">
          View Marks
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
          Explore your subject-wise marks and detailed academic performance.
        </p>

        <div className="mt-5 text-sm font-semibold text-[var(--primary-color)]">
          View Details
        </div>
      </a>

      {/* Result Card */}
      <a
        href="/student/result"
        className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-1 hover:border-[var(--primary-rgba-20)] hover:shadow-[var(--shadow-lg)]"
      >
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--success-light)] text-xl text-[var(--success-color)] transition-transform duration-300 group-hover:scale-110">
            <FiAward />
          </div>

          <span className="text-xl text-[var(--light-gray)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--primary-color)]">
            →
          </span>
        </div>

        <h3 className="mt-6 text-lg font-bold text-[var(--text-dark)]">
          View Your Results
        </h3>

        <p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
          View your semester results, GPA, CGPA, grades, and academic summary.
        </p>

        <div className="mt-5 text-sm font-semibold text-[var(--primary-color)]">
          View Results
        </div>
      </a>
    </section>
  );
}