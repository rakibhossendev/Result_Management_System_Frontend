interface SubjectNameProps {
  subjects: string[];
  selectedSubject: string;
  updateSelectSubject: React.Dispatch<React.SetStateAction<string>>;
}

export default function SubjectName({subjects,selectedSubject,updateSelectSubject}: SubjectNameProps) {
	
  return (
    <div className="relative w-full">
      <select
        value={selectedSubject}
        onChange={(e) => updateSelectSubject(e.target.value)}
        className="w-full appearance-none rounded-[var(--radius-lg)] border border-[var(--border-color)] bg-[var(--off-white)] px-4 py-3.5 pr-11 text-sm font-semibold text-[var(--text-dark)] outline-none transition-all duration-300 ease-[var(--ease-smooth)] hover:border-[var(--primary-rgba-20)] hover:bg-[var(--white)] focus:border-[var(--primary-color)] focus:bg-[var(--white)] focus:ring-4 focus:ring-[var(--primary-rgba-10)]"
      >
        <option value="">Select Subject</option>

        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      {/* Custom Arrow */}
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--medium-gray)]">
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}