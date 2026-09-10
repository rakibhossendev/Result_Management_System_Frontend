
import "../../styles/animation.css";
import StudentSearch from "../../features/home/Search";

export default function Home() {
	return (
		<main
			className="min-h-screen text-[var(--text-dark)]"
			style={{ backgroundColor: "var(--off-white)" }}
		>
			{/* ================= HERO ================= */}
			<section className="relative overflow-hidden">

				{/* Background Decoration */}
				<div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--primary-rgba-10)] blur-3xl animate-pulse-soft" />
				<div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-[var(--secondary-light)] opacity-70 blur-3xl animate-pulse-soft delay-300" />
				<div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[var(--primary-rgba-5)] blur-3xl" />
				<div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
					<div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

						{/* ================= LEFT CONTENT ================= */}
						<div className="text-center lg:text-left">

							{/* Badge */}
							<div
								className="animate-fade-in-down mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-[var(--shadow-sm)] hover-lift"
								style={{
									backgroundColor: "var(--white)",
									borderColor: "var(--border-light)",
									color: "var(--primary-color)",
								}}
							>
								<span
									className="h-2.5 w-2.5 rounded-full animate-pulse-soft"
									style={{
										backgroundColor: "var(--success-color)",
									}}
								/>

								Result Management System

								<span
									className="ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
									style={{
										backgroundColor: "var(--primary-light)",
										color: "var(--primary-color)",
									}}
								>
									Online
								</span>
							</div>

							{/* Heading */}
							<h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
								Check Your{" "}
								<span className="bg-[var(--gradient-primary)] bg-clip-text text-transparent">
									Academic Result
								</span>

								<br className="hidden sm:block" />

								<span className="text-[var(--text-dark)]">
									{" "}Quickly & Easily
								</span>
							</h1>

							{/* Description */}
							<p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--medium-gray)] sm:text-lg lg:mx-0">
								Access your academic result using your student
								roll number. A simple, fast and reliable way
								to check your academic performance.
							</p>

							{/* Search Area */}
							<div className="animate-fade-in-up delay-300 mx-auto mt-9 max-w-xl lg:mx-0">

								<div
									className="rounded-[var(--radius-2xl)] border p-2"
									style={{
										backgroundColor: "var(--white)",
										borderColor: "var(--border-light)",
										boxShadow: "var(--shadow-xl)",
									}}
								>
									<div
										className="rounded-[var(--radius-xl)] p-5 sm:p-6"
										style={{
											background:
												"var(--gradient-subtle)",
										}}
									>
										<div className="mb-4 flex items-center gap-3">
											<div
												className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]"
												style={{
													backgroundColor:
														"var(--white)",
													color: "var(--primary-color)",
													boxShadow:
														"var(--shadow-sm)",
												}}
											>
												<svg
													className="h-5 w-5"
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

											<div>
												<p className="text-sm font-bold text-[var(--text-dark)]">
													Find Your Result
												</p>

												<p className="text-xs text-[var(--medium-gray)]">
													Enter your roll number below
												</p>
											</div>
										</div>

										<StudentSearch />
									</div>
								</div>
							</div>

							{/* Trust / Info */}
							<div className="animate-fade-in-up delay-400 mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[var(--medium-gray)] lg:justify-start">

								<div className="hover-scale flex items-center gap-2">
									<span
										className="flex h-6 w-6 items-center justify-center rounded-full"
										style={{
											backgroundColor:
												"var(--success-light)",
											color: "var(--success-color)",
										}}
									>
										✓
									</span>
									Fast Search
								</div>

								<div className="hover-scale flex items-center gap-2">
									<span
										className="flex h-6 w-6 items-center justify-center rounded-full"
										style={{
											backgroundColor:
												"var(--info-light)",
											color: "var(--info-color)",
										}}
									>
										✓
									</span>
									Easy to Use
								</div>

								<div className="hover-scale flex items-center gap-2">
									<span
										className="flex h-6 w-6 items-center justify-center rounded-full"
										style={{
											backgroundColor:
												"var(--primary-light)",
											color: "var(--primary-color)",
										}}
									>
										✓
									</span>
									Secure
								</div>
							</div>
						</div>

						{/* ================= RIGHT PREVIEW ================= */}
						<div className="hidden justify-center lg:flex">
							<div className="animate-fade-in-right delay-200 relative w-full max-w-md">

								{/* Main Result Card */}
								<div
									className="animate-float relative overflow-hidden rounded-[var(--radius-2xl)] border p-7 transition-all duration-500"
									style={{
										backgroundColor: "var(--white)",
										borderColor: "var(--border-light)",
										boxShadow: "var(--shadow-2xl)",
									}}
								>
									{/* Top Gradient Line */}
									<div
										className="absolute left-0 right-0 top-0 h-1"
										style={{
											background:
												"var(--gradient-primary)",
										}}
									/>

									{/* Card Header */}
									<div className="flex items-center justify-between border-b border-[var(--border-light)] pb-5">

										<div>
											<p className="text-xs font-semibold uppercase tracking-wider text-[var(--medium-gray)]">
												Student Result
											</p>

											<h3 className="mt-1 text-xl font-bold text-[var(--text-dark)]">
												Academic Overview
											</h3>
										</div>

										<div
											className="animate-scale-in delay-500 flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)]"
											style={{
												background:
													"var(--gradient-subtle)",
											}}
										>
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

										<div
											className="animate-scale-in delay-600 flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold text-[var(--white)]"
											style={{
												background:
													"var(--gradient-primary)",
											}}
										>
											ST
										</div>

										<div>
											<p className="font-semibold text-[var(--text-dark)]">
												Mr. Alice
											</p>

											<p className="mt-0.5 text-sm text-[var(--medium-gray)]">
												Roll: 123456
											</p>
										</div>

										<div
											className="ml-auto rounded-full px-3 py-1 text-xs font-semibold"
											style={{
												backgroundColor:
													"var(--success-light)",
												color: "var(--success-color)",
											}}
										>
											Verified
										</div>
									</div>

									{/* Stats */}
									<div className="animate-fade-in-up delay-600 mt-6 grid grid-cols-2 gap-4">

										<div
											className="rounded-[var(--radius-lg)] p-4 hover-lift"
											style={{
												backgroundColor:
													"var(--primary-light)",
											}}
										>
											<p className="text-xs font-medium text-[var(--medium-gray)]">
												CGPA
											</p>

											<p className="mt-1 text-2xl font-bold text-[var(--primary-dark)]">
												3.85
											</p>

											<p className="mt-1 text-xs text-[var(--primary-color)]">
												Excellent
											</p>
										</div>

										<div
											className="rounded-[var(--radius-lg)] p-4 hover-lift"
											style={{
												backgroundColor:
													"var(--success-light)",
											}}
										>
											<p className="text-xs font-medium text-[var(--medium-gray)]">
												Status
											</p>

											<p className="mt-1 text-lg font-bold text-[var(--success-color)]">
												Passed
											</p>

											<p className="mt-1 text-xs text-[var(--success-color)]">
												Successfully completed
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

										<div className="h-2.5 overflow-hidden rounded-full bg-[var(--light-gray)]">
											<div
												className="animate-progress h-full rounded-full"
												style={{
													"--progress-width": "85%",
													background:
														"var(--gradient-primary)",
												}}
											/>
										</div>
									</div>

									{/* Subjects */}
									<div className="stagger mt-6 space-y-3">

										<div
											className="flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3 transition-all duration-300 hover:-translate-x-1"
											style={{
												backgroundColor:
													"var(--off-white)",
											}}
										>
											<div className="flex items-center gap-3">
												<span
													className="h-2 w-2 rounded-full"
													style={{
														backgroundColor:
															"var(--primary-color)",
													}}
												/>

												<span className="text-sm text-[var(--dark-gray)]">
													Mathematics
												</span>
											</div>

											<span className="font-semibold text-[var(--success-color)]">
												A+
											</span>
										</div>

										<div
											className="flex items-center justify-between rounded-[var(--radius-md)] px-4 py-3 transition-all duration-300 hover:-translate-x-1"
											style={{
												backgroundColor:
													"var(--off-white)",
											}}
										>
											<div className="flex items-center gap-3">
												<span
													className="h-2 w-2 rounded-full"
													style={{
														backgroundColor:
															"var(--secondary-dark)",
													}}
												/>

												<span className="text-sm text-[var(--dark-gray)]">
													Physics
												</span>
											</div>

											<span className="font-semibold text-[var(--success-color)]">
												A
											</span>
										</div>
									</div>
								</div>

								{/* Floating Notification */}
								<div
									className="animate-fade-in-left delay-600 animate-float absolute -right-6 top-10 hidden w-48 rounded-[var(--radius-lg)] border p-4 shadow-[var(--shadow-xl)] xl:block"
									style={{
										backgroundColor: "var(--white)",
										borderColor: "var(--border-light)",
									}}
								>
									<div className="flex items-center gap-3">

										<div
											className="animate-scale-in delay-800 flex h-9 w-9 items-center justify-center rounded-full"
											style={{
												backgroundColor:
													"var(--success-light)",
												color: "var(--success-color)",
											}}
										>
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
								<div
									className="animate-scale-in delay-700 absolute -bottom-5 -left-6 hidden w-48 rounded-[var(--radius-lg)] border px-5 py-4 shadow-[var(--shadow-xl)] xl:block"
									style={{
										backgroundColor: "var(--white)",
										borderColor: "var(--border-light)",
									}}
								>
									<p className="text-xs text-[var(--medium-gray)]">
										Result Portal
									</p>

									<p className="mt-1 font-bold text-[var(--primary-color)]">
										Quick & Reliable
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ================= FEATURES ================= */}
			<section
				className="border-t"
				style={{
					backgroundColor: "var(--white)",
					borderColor: "var(--border-light)",
				}}
			>
				<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

					{/* Section Heading */}
					<div className="animate-fade-in-up mx-auto mb-10 max-w-2xl text-center">

						<span
							className="inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
							style={{
								backgroundColor: "var(--primary-light)",
								color: "var(--primary-color)",
							}}
						>
							Why use this portal?
						</span>

						<h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-dark)] sm:text-4xl">
							Simple. Fast. Reliable.
						</h2>

						<p className="mt-3 text-sm leading-6 text-[var(--medium-gray)] sm:text-base">
							Everything you need to access and check your
							academic result without unnecessary complexity.
						</p>
					</div>

					<div className="stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

						{/* Feature 1 */}
						<div
							className="group rounded-[var(--radius-xl)] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
							style={{
								backgroundColor: "var(--white)",
								borderColor: "var(--border-light)",
							}}
						>
							<div
								className="mb-5 flex h-13 w-13 items-center justify-center rounded-[var(--radius-lg)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
								style={{
									backgroundColor: "var(--primary-light)",
									color: "var(--primary-color)",
								}}
							>
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
								Find your academic result quickly by entering
								your student roll number.
							</p>
						</div>

						{/* Feature 2 */}
						<div
							className="group rounded-[var(--radius-xl)] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
							style={{
								backgroundColor: "var(--white)",
								borderColor: "var(--border-light)",
							}}
						>
							<div
								className="mb-5 flex h-13 w-13 items-center justify-center rounded-[var(--radius-lg)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
								style={{
									backgroundColor:
										"var(--secondary-light)",
									color: "var(--secondary-dark)",
								}}
							>
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
								Student academic information is handled through
								a structured result management system.
							</p>
						</div>

						{/* Feature 3 */}
						<div
							className="group rounded-[var(--radius-xl)] border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-lg)]"
							style={{
								backgroundColor: "var(--white)",
								borderColor: "var(--border-light)",
							}}
						>
							<div
								className="mb-5 flex h-13 w-13 items-center justify-center rounded-[var(--radius-lg)] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
								style={{
									backgroundColor:
										"var(--success-light)",
									color: "var(--success-color)",
								}}
							>
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
								Access your result from any device through a
								clean and responsive interface.
							</p>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

