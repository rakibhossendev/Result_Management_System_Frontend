import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { ApiResponseType } from "../../TypeScript/SearchDataType/HomeDataType";

export default function StudentSearch() {
  const navigate = useNavigate();
  const [roll, setRoll] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (): Promise<void> => {
    if (!roll.trim()) {
      toast.info("Please enter your roll number");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/api/student/search",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ student_roll: roll }),
        }
      );

      const data: ApiResponseType = await response.json();

      if (!response.ok) {
        toast.error(data.message);
        return;
      }

      if (data.success) {
        toast.success(data.message);
        navigate(`/student/dashboard/${roll}`);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--off-white)" }}
    >
      <div className="w-full max-w-xl">
        <div
          className="overflow-hidden rounded-2xl"
          style={{
            backgroundColor: "var(--white)",
            border: "1px solid var(--border-light)",
            boxShadow: "var(--shadow-xl)",
          }}
        >
          {/* Header */}
          <div
            className="px-8 py-10 text-center"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Search Student Result
            </h1>

            <p className="mt-3 text-sm text-white/85">
              Enter your roll number to view your academic result
            </p>
          </div>

          {/* Form */}
          <div className="p-8 sm:p-10">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="roll"
                  className="mb-2 block text-sm font-semibold"
                  style={{ color: "var(--dark-gray)" }}
                >
                  Student Roll Number
                </label>

                <input
                  id="roll"
                  type="number"
                  placeholder="Enter your roll number"
                  value={roll}
                  onChange={(e) => setRoll(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="w-full rounded-xl px-4 py-4 outline-none transition-all"
                  style={{
                    backgroundColor: "var(--off-white)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-dark)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--primary-color)";
                    e.currentTarget.style.boxShadow =
                      "0 0 0 4px var(--primary-rgba-10)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor =
                      "var(--border-color)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                onClick={handleSearch}
                disabled={loading}
                className="w-full rounded-xl py-4 font-semibold text-white transition-all duration-300"
                style={{
                  background: "var(--gradient-primary)",
                  boxShadow: "var(--shadow-md)",
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Searching..." : "Search Result"}
              </button>
            </div>

            <p className="mt-6 text-center text-xs" style={{ color: "var(--medium-gray)" }}>
              Enter your valid student roll number to continue
            </p>

          </div>

        </div>

      </div>
      
    </div>
  );
}
