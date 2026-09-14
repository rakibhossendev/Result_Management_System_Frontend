import { Link, useParams } from "react-router-dom";

export default function BackToDashboardButton() {
    const { roll } = useParams<{ roll: string }>();

    return (
        <div className="mb-6">
            <Link
                to={`/student/dashboard/${roll ?? ""}`}
                className="group inline-flex items-center gap-2 rounded-[var(--radius-lg)] border border-[var(--border-color)] bg-[var(--white)] px-4 py-2.5 text-sm font-semibold text-[var(--text-dark)] shadow-[var(--shadow-sm)] transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:border-[var(--primary-color)] hover:bg-[var(--primary-light)] hover:text-[var(--primary-color)] hover:shadow-[var(--shadow-md)] focus:outline-none focus:ring-4 focus:ring-[var(--primary-rgba-10)] active:translate-y-0"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>

                <span>Back to Dashboard</span>
            </Link>
        </div>
    );
}