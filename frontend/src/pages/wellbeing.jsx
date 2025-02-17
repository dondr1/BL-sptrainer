import React, { useState, useEffect } from 'react';
import RadarChart from '../components/RadarChart';
import { accessScoresAll } from '../api/api';

const Wellbeing = () => {
  const [radarData, setRadarData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Retrieve the logged-in user's username (make sure it's set during login)
  const loggedInUser = localStorage.getItem('uname');

  useEffect(() => {
    if (loggedInUser) {
      // Fetch all scores for the logged-in user
      accessScoresAll(loggedInUser)
        .then((data) => {
          if (data.scores && data.scores.length > 0) {
            // Use the latest session's scores (adjust logic if needed)
            const latestScores = data.scores[data.scores.length - 1];
            // Transform backend data to the RadarChart format:
            const radarChartData = [
              {
                axis: 'Rapport Building',
                value: latestScores.rapport_building,
              },
              { axis: 'Risk Assessment', value: latestScores.risk_assess },
              { axis: 'Safety Planning', value: latestScores.safety_planning },
              {
                axis: 'Crisis De-Escalation',
                value: latestScores.crisis_descalation,
              },
              { axis: 'Resource Referral', value: latestScores.resource_ref },
            ];
            setRadarData(radarChartData);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching scores:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [loggedInUser]);

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
            {loading ? (
              <p className="text-black">Loading your scores...</p>
            ) : radarData ? (
              <RadarChart data={radarData} />
            ) : (
              <p className="text-black">
                No scores available for your account.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
