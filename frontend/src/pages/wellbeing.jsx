import React from 'react';
import RadarChart from '../components/RadarChart';

const Wellbeing = () => {
  // Sample Wellbeing Data (values range from 0 to 10)
  const wellbeingData = [
    { axis: 'Rapport Building', value: 7 },
    { axis: 'Risk Assessment', value: 6 },
    { axis: 'Safety Planning', value: 8 },
    { axis: 'Crisis De-escalation', value: 7 },
    { axis: 'Resource Referral', value: 5 },
  ];

  return (
    <div>
      <h2>Your Wellbeing Overview</h2>
      <RadarChart data={wellbeingData} />
    </div>
  );
};

export default Wellbeing
