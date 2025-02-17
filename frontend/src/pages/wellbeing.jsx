import React, { useState, useEffect } from 'react';
import RadarChart from '../components/RadarChart';
import axios from 'axios';

const Wellbeing = () => {
  const [radarData, setRadarData] = useState(null);
  const [latestScore, setLatestScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const loggedInUser = localStorage.getItem('uname')?.trim();

  const fetchScores = async () => {
    console.log('Logged in user:', loggedInUser);
    try {
      const response = await axios.get(
        'http://192.168.18.18:8000/access-scores-all/',
        { params: { uname: loggedInUser } }
      );
      console.log('Response data:', response.data);

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const scores = response.data.scores;
      if (!scores?.length) throw new Error('No scores available');

      // Get the most recent score (assuming the last item is the latest)
      const latest = scores[scores.length - 1];
      setLatestScore(latest);
      setRadarData([
        {
          axis: 'Rapport Building',
          value: latest.report['Rapport Building'].score,
        },
        {
          axis: 'Risk Assessment',
          value: latest.report['Risk Assessment Accuracy'].score,
        },
        {
          axis: 'Safety Planning',
          value: latest.report['Safety Planning'].score,
        },
        {
          axis: 'Crisis De-escalation',
          value: latest.report['Crisis De-escalation'].score,
        },
        {
          axis: 'Resource Referral',
          value: latest.report['Resource Referral'].score,
        },
      ]);

      return latest;
    } catch (err) {
      throw err.response?.data?.error || err.message;
    }
  };

  useEffect(() => {
    if (!loggedInUser) {
      setError('No user logged in');
      setLoading(false);
      return;
    }

    setLoading(true);
    fetchScores()
      .catch((err) => {
        setError(typeof err === 'string' ? err : err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [loggedInUser]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!radarData || !latestScore) return <div>No data available</div>;

  return (
    // Outer container with fixed height and vertical scrolling
    <div className="flex h-[85vh] mt-[-40px] rounded-lg mb-10 bg-white overflow-y-auto">
      <div className="flex justify-center items-center w-full">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-8xl">
          <h2 className="text-3xl font-bold mb-8 mt-10 text-black text-center">
            Your Overall Report:
          </h2>
          {/* This container holds both the RadarChart and the notes */}
          <div className="flex flex-col justify-center items-center space-y-8">
            <RadarChart data={radarData} />
            <div className="w-full">
              <h3 className="text-xl font-bold mb-4 text-black">
                Detailed Notes
              </h3>
              <ul className="text-black space-y-2">
                <li>
                  <strong>Rapport Building:</strong>{' '}
                  {latestScore.report['Rapport Building'].notes}
                </li>
                <li>
                  <strong>Risk Assessment Accuracy:</strong>{' '}
                  {latestScore.report['Risk Assessment Accuracy'].notes}
                </li>
                <li>
                  <strong>Safety Planning:</strong>{' '}
                  {latestScore.report['Safety Planning'].notes}
                </li>
                <li>
                  <strong>Crisis De-escalation:</strong>{' '}
                  {latestScore.report['Crisis De-escalation'].notes}
                </li>
                <li>
                  <strong>Resource Referral:</strong>{' '}
                  {latestScore.report['Resource Referral'].notes}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
