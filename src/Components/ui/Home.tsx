import "../../styles/animation.css";
import StudentSearch from "../../features/home/Search"

export default function Home() {
	return (
		<main className="min-h-screen bg-[var(--off-white)] text-[var(--text-dark)]">

			{/* Hero Section */}
			<section className="relative overflow-hidden">

				{/* Background Decoration */}
				<div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-[var(--primary-rgba-10)] blur-3xl animate-pulse-soft" />
				<div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[var(--secondary-light)] opacity-70 blur-3xl animate-pulse-soft delay-300" />
				<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-20">

						{/* ================= LEFT CONTENT ================= */}
						<div className="text-center lg:text-left">

							{/* Badge */}
							<div className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-light)] bg-[var(--white)] px-4 py-2 text-sm font-medium text-[var(--primary-color)] shadow-[var(--shadow-sm)] hover-lift">
								<span className="h-2 w-2 rounded-full bg-[var(--success-color)] animate-pulse-soft" />
								Result Management System
							</div>

							{/* Heading */}
							<h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
								Check Your{" "}
								<span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
									Academic Result
								</span>
								<br className="hidden sm:block" />
								{" "}Easily
							</h1>


							{/* Description */}
							<p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--medium-gray)] sm:text-lg lg:mx-0">
								Quickly find your academic results using your
								student roll number. Simple, fast and reliable
								result checking system.
							</p>


							{/* Search Area */}
							<div className="animate-fade-in-up delay-300 mx-auto mt-8 max-w-xl lg:mx-0">
								<div className="rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-3 shadow-[var(--shadow-lg)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-xl)]">
									<StudentSearch />
								</div>
							</div>


							{/* Small Info */}
							<div className="animate-fade-in-up delay-400 mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--medium-gray)] lg:justify-start">
								<div className="hover-scale flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--success-light)] text-[var(--success-color)]">
										✓
									</span>
									Fast Search
								</div>

								<div className="hover-scale flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--info-light)] text-[var(--info-color)]">
										✓
									</span>
									Easy to Use
								</div>


								<div className="hover-scale flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--primary-light)] text-[var(--primary-color)]">
										✓
									</span>
									Secure
								</div>
							</div>
						</div>


						{/* ================= RIGHT ILLUSTRATION ================= */}
						<div className="hidden justify-center lg:flex">
							<div className="animate-fade-in-right delay-200 relative w-full max-w-md">

								{/* Main Card */}
								<div className="animate-float relative rounded-[var(--radius-2xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 shadow-[var(--shadow-2xl)] transition-all duration-500 hover:shadow-[var(--shadow-2xl)]">

									{/* Card Header */}
									<div className="flex items-center justify-between border-b border-[var(--border-light)] pb-5">
										<div>
											<p className="text-sm font-medium text-[var(--medium-gray)]">
												Student Result
											</p>
											<h3 className="mt-1 text-xl font-bold text-[var(--text-dark)]">
												Academic Overview
											</h3>
										</div>
										<div className="animate-scale-in delay-500 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--gradient-subtle)]">
											<svg
												className="h-6 w-6 text-[var(--primary-color)]"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h6l5 5v11a2 2 0 01-2 2z"
												/>
											</svg>
										</div>
									</div>


									{/* Student Info */}
									<div className="animate-fade-in delay-500 mt-6 flex items-center gap-4">
										<div className="animate-scale-in delay-600 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--gradient-primary)] text-lg font-bold text-[var(--white)]">
											ST
										</div>
										<div>
											<p className="font-semibold text-[var(--text-dark)]">
												Mr. Alice
											</p>
											<p className="text-sm text-[var(--medium-gray)]">
												Roll: 123456
											</p>
										</div>
									</div>


									{/* Result Stats */}
									<div className="animate-fade-in-up delay-600 mt-6 grid grid-cols-2 gap-4">
										<div className="rounded-[var(--radius-lg)] bg-[var(--primary-light)] p-4 hover-lift">
											<p className="text-xs font-medium text-[var(--medium-gray)]">
												CGPA
											</p>
											<p className="mt-1 text-2xl font-bold text-[var(--primary-dark)]">
												3.85
											</p>
										</div>

										<div className="rounded-[var(--radius-lg)] bg-[var(--success-light)] p-4 hover-lift">
											<p className="text-xs font-medium text-[var(--medium-gray)]">
												Status
											</p>
											<p className="mt-1 text-lg font-bold text-[var(--success-color)]">
												Passed
											</p>
										</div>
									</div>


									{/* Progress */}
									<div className="animate-fade-in-up delay-700 mt-6">
										<div className="mb-2 flex justify-between text-sm">
											<span className="font-medium text-[var(--dark-gray)]">
												Academic Progress
											</span>
											<span className="font-semibold text-[var(--primary-color)]">
												85%
											</span>
										</div>
										<div className="h-2 overflow-hidden rounded-full bg-[var(--light-gray)]">
											<div
												className="animate-progress h-full rounded-full"
												style={{
													"--progress-width": "85%",
													background: "var(--gradient-primary)",
												}}
											/>
										</div>
									</div>


									{/* Fake Subjects */}
									<div className="stagger mt-6 space-y-3">
										<div className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--off-white)] px-4 py-3 transition-all duration-300 hover:-translate-x-1">
											<span className="text-sm text-[var(--dark-gray)]">
												Mathematics
											</span>
											<span className="font-semibold text-[var(--success-color)]">
												A+
											</span>
										</div>
										<div className="flex items-center justify-between rounded-[var(--radius-md)] bg-[var(--off-white)] px-4 py-3 transition-all duration-300 hover:-translate-x-1">
											<span className="text-sm text-[var(--dark-gray)]">
												Physics
											</span>
											<span className="font-semibold text-[var(--success-color)]">
												A
											</span>
										</div>
									</div>
								</div>


								{/* Floating Notification */}
								<div className="animate-fade-in-left delay-600 animate-float absolute -right-5 top-10 hidden w-44 rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--white)] p-4 shadow-[var(--shadow-xl)] xl:block">
									<div className="flex items-center gap-3">
										<div className="animate-scale-in delay-800 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--success-light)] text-[var(--success-color)]">
											✓
										</div>
										<div>
											<p className="text-xs text-[var(--medium-gray)]">
												Result
											</p>
											<p className="text-sm font-bold text-[var(--text-dark)]">
												Successfully Found
											</p>
										</div>
									</div>
								</div>


								{/* Floating Badge */}
								<div className="animate-scale-in delay-700 absolute -bottom-5 -left-5 hidden w-44 rounded-[var(--radius-lg)] border border-[var(--border-light)] bg-[var(--white)] px-5 py-4 text-[var(--text-dark)] shadow-[var(--shadow-xl)] xl:block">
									<p className="text-xs text-[var(--medium-gray)]">Result Portal</p>
									<p className="mt-1 font-bold text-[var(--primary-color)]">Quick & Reliable</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			{/* ================= FEATURES ================= */}
			<section className="border-t border-[var(--border-light)] bg-[var(--white)]">
				<div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
					<div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

						{/* Feature 1 */}
						<div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--primary-light)] text-[var(--primary-color)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
								<svg
									className="h-6 w-6"
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
							<h3 className="text-lg font-bold text-[var(--text-dark)]">
								Quick Search
							</h3>
							<p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
								Find your academic result quickly using your
								roll number.
							</p>
						</div>


						{/* Feature 2 */}
						<div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--secondary-light)] text-[var(--secondary-dark)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M12 15v2m-6 4h12a2 2 0 002-2V9a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v2h8z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-bold text-[var(--text-dark)]">
								Secure System
							</h3>
							<p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
								Your academic information is handled through
								a secure result management system.
							</p>
						</div>


						{/* Feature 3 */}
						<div className="group rounded-[var(--radius-xl)] border border-[var(--border-light)] bg-[var(--white)] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]">
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--success-light)] text-[var(--success-color)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
								<svg
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-lg font-bold text-[var(--text-dark)]">
								Easy Access
							</h3>
							<p className="mt-2 text-sm leading-6 text-[var(--medium-gray)]">
								Access your result from any device with a
								clean and simple interface.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

