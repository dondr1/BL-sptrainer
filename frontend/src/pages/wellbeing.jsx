import React from 'react';
import RadarChart from '../components/RadarChart';

const Wellbeing = () => {
	// Sample Wellbeing Data (values range from 0 to 10)
	const wellbeingData = [
		{ axis: 'Rapport Building', value: 7 },
		{ axis: 'Risk Assessment', value: 6 },
		{ axis: 'Safety Planning', value: 8 },
		{ axis: 'Crisis De-Escalation', value: 7 },
		{ axis: 'Resource Referral', value: 5 },
	];

	return (
		<div className="flex justify-center items-start min-h-screen pt-0">
			{/* Increase negative margin to pull the black box up */}
			<div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-8xl mx-auto -mt-16">
				<h2 className="text-3xl font-bold mb-8 ml-4">
					Your Wellbeing Overview:
				</h2>
				{/* Chart container */}
				<div className="flex justify-center">
					<RadarChart data={wellbeingData} />
				</div>
			</div>
		</div>
	);
};

export default Wellbeing;
