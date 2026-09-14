import type { AttendanceDataType } from "../../TypeScript/Attendance/attendance";

interface FilterSelectedSubjectProps {
  filterSelectedSubject: AttendanceDataType[];
}

export default function ShowAttendanceTable({filterSelectedSubject,}: FilterSelectedSubjectProps) {

  
  return (
    <div className="mt-8 w-full overflow-hidden rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] shadow-[var(--shadow-sm)]">
      <div className="border-b border-[var(--border-light)] px-6 py-5">
        <h2 className="text-xl font-bold text-[var(--text-dark)]">
          Show Attendance
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left text-sm">
          <thead className="bg-[var(--primary-light)]">
            <tr>
              <th className="px-6 py-4 font-semibold text-[var(--text-dark)]">
                Subject Name
              </th>
              <th className="px-6 py-4 font-semibold text-[var(--text-dark)]">
                Date
              </th>
              <th className="px-6 py-4 font-semibold text-[var(--text-dark)]">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[var(--border-light)]">
            {filterSelectedSubject.map(
              ({ attendance_id, subject_name, attendance_date, status }) => {
                const isPresent = status === "P";

                return (
                  <tr
                    key={attendance_id}
                    className="transition-colors duration-200 hover:bg-[var(--primary-light)]"
                  >
                    <td className="px-6 py-4 font-medium text-[var(--text-dark)]">
                      {subject_name}
                    </td>
                    <td className="px-6 py-4 text-[var(--medium-gray)]">
                      {attendance_date}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${isPresent
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                          }`}
                      >
                        {isPresent ? "Present" : "Absent"}
                      </span>
                    </td>
                  </tr>
                );
              }
            )}

            {filterSelectedSubject.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-6 py-10 text-center text-[var(--medium-gray)]"
                >
                  No attendance records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}