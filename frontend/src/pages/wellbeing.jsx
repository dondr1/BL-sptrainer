import React from 'react';
import RadarChart from '../components/RadarChart';
import { Link } from 'react-router-dom';

const Wellbeing = () => {
    //1 to 10 values
  const wellbeingData = [
    { axis: 'Rapport Building', value: 7 },
    { axis: 'Risk Assessment', value: 6 },
    { axis: 'Safety Planning', value: 8 },
    { axis: 'Crisis De-escalation', value: 7 },
    { axis: 'Resource Referral', value: 5 },
  ];

	return (
		<div className="flex justify-center items-start min-h-screen pt-8">
			{' '}
			{/* Changed items-center to items-start and added padding-top */}
			{/* Reduced height and removed inner centering */}
			<div className="bg-black p-8 rounded-lg shadow-lg h-auto w-full max-w-2xl">
				{' '}
				{/* Added max-width and responsive width */}
				{/* Heading adjustment */}
				<h2 className="text-3xl font-bold mb-8 ml-4">
					{' '}
					{/* Removed negative margin */}
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
