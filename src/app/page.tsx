import Link from "next/link";
import React from "react";

const HomePage = () => {
	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<div className="container mx-auto px-4 py-24">
				<div className="max-w-4xl mx-auto text-center space-y-16">
					{/* Header Section */}
					<div className="space-y-6">
						<h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400">
							DocSta Hospital Appointment System
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
							Easy and secure medical appointment booking for all
							your healthcare needs
						</p>
					</div>

					{/* Main Card */}
					<div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 border border-gray-100 dark:border-gray-700">
						<div className="grid md:grid-cols-2 gap-12 items-center">
							{/* Left Content */}
							<div className="space-y-6 text-left">
								<h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
									Our Healthcare Services
								</h2>
								<ul className="space-y-4">
									{features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center space-x-3"
										>
											<span className="text-teal-500 dark:text-teal-400">
												<CheckIcon className="h-5 w-5" />
											</span>
											<span className="text-gray-600 dark:text-gray-300">
												{feature}
											</span>
										</li>
									))}
								</ul>
							</div>

							{/* Right Content / CTA */}
							<div className="space-y-8">
								<div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl">
									<p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
										Need medical attention? Schedule your
										hospital visit now.
									</p>
									<Link
										href="/book-online"
										className="block w-full text-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
									>
										Schedule Appointment
									</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Trust Indicators */}
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
						{trustIndicators.map((indicator, index) => (
							<div key={index} className="space-y-2">
								<div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
									{indicator.value}
								</div>
								<div className="text-sm text-gray-600 dark:text-gray-400">
									{indicator.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

// Helper Components
const CheckIcon = ({ className = "h-6 w-6" }) => (
	<svg
		className={className}
		fill="none"
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<path d="M5 13l4 4L19 7" />
	</svg>
);

// Data
const features = [
	"Specialist Consultations",
	"Emergency Services",
	"Lab Test Booking",
	"Health Check-up Packages",
	"Multiple Department Access",
	"Digital Medical Records",
];

const trustIndicators = [
	{ value: "50+", label: "Medical Specialists" },
	{ value: "24/7", label: "Emergency Care" },
	{ value: "99%", label: "Patient Satisfaction" },
	{ value: "20+", label: "Departments" },
];

export default HomePage;
