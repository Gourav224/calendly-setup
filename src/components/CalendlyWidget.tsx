"use client"
import React, { useState } from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

const App = () => {
	const [eventDetails, setEventDetails] = useState<any>(null); // Store event data
	const [showForm, setShowForm] = useState(false); // Toggle the display of the form
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		paymentMethod: "online",
		doctorName: "",
	});

	// Listen to Calendly events
	useCalendlyEventListener({
		onProfilePageViewed: () => console.log("Profile page viewed"),
		onDateAndTimeSelected: (e) => {
			console.log("Date and Time Selected", e.data.payload);
			setEventDetails(e.data.payload); // Store event details when a slot is selected
			setShowForm(true); // Show the form after selection
		},
		onEventTypeViewed: () => console.log("Event type viewed"),
		onEventScheduled: (e) => {
			console.log("Event Scheduled", e.data.payload);
			setShowForm(true); // Optionally, hide the form after successful scheduling
		},
		onPageHeightResize: (e) =>
			console.log("Page height resize", e.data.payload.height),
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Patient Details:", formData);
		// Here you can submit the data to your backend or store it
		setShowForm(false); // Optionally hide the form after submitting
	};

	return (
		<div className="App">
			<h1>Book Your Appointment</h1>

			{/* Calendly Widget */}
			<InlineWidget url="https://calendly.com/zoc-work-2024" />

			{/* Form to Collect Patient Details */}
			{showForm && (
				<div className="mt-8 max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
					<h2 className="text-xl font-bold">Patient Details</h2>
					<form onSubmit={handleSubmit} className="space-y-4 mt-4">
						<div>
							<label className="block text-lg">Name</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md"
								required
							/>
						</div>

						<div>
							<label className="block text-lg">Email</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md"
								required
							/>
						</div>

						<div>
							<label className="block text-lg">Phone</label>
							<input
								type="tel"
								name="phone"
								value={formData.phone}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md"
								required
							/>
						</div>

						<div>
							<label className="block text-lg">
								Payment Method
							</label>
							<select
								name="paymentMethod"
								value={formData.paymentMethod}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md"
								required
							>
								<option value="online">Online</option>
								<option value="offline">Offline</option>
							</select>
						</div>

						<div>
							<label className="block text-lg">
								Doctor's Name
							</label>
							<input
								type="text"
								name="doctorName"
								value={formData.doctorName}
								onChange={handleChange}
								className="w-full px-4 py-2 border rounded-md"
								required
							/>
						</div>

						<div className="mt-6">
							<button
								type="submit"
								className="w-full px-4 py-2 bg-blue-500 text-white rounded-md"
							>
								Submit Details
							</button>
						</div>
					</form>
				</div>
			)}
		</div>
	);
};

export default App;
