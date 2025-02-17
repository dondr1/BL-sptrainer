import React from 'react';
import RadarChart from '../components/RadarChart';

const Wellbeing = () => {
	// 1 to 10 values
	const wellbeingData = [
		{ axis: 'Rapport Building', value: 7 },
		{ axis: 'Risk Assessment', value: 6 },
		{ axis: 'Safety Planning', value: 8 },
		{ axis: 'Crisis De-Escalation', value: 7 },
		{ axis: 'Resource Referral', value: 5 },
	];

	return (
		// Inverted background container: bg-white instead of bg-black
		<div className="flex h-[85vh] mt-[-40px] rounded-lg mb-10 overflow-hidden bg-white">
			<div className="flex justify-center items-center w-full">
				{/* Inverted Chart container */}
				<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-8xl">
					<h2 className="text-3xl font-bold mb-8 mt-10 text-black">
						Your Overall Report:
					</h2>
					<div className="flex justify-center -mt-10">
						<RadarChart data={wellbeingData} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wellbeing;
