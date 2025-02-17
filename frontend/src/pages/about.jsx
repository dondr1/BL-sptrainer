import React from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

// Custom label function for better readability
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
      style={{ fontSize: '14px' }}
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const About = () => {
  // Data for Pie Charts
  const thoughtsData = [
    { name: 'Thoughts (Lifetime)', value: 12, color: '#E63946' },
    { name: 'Thoughts (Past Year)', value: 2.6, color: '#F4A261' },
  ];

  const plansData = [
    { name: 'Planned (Lifetime)', value: 4.2, color: '#2A9D8F' },
    { name: 'Planned (Past Year)', value: 0.8, color: '#264653' },
  ];

  const attemptsData = [
    { name: 'Attempted (Lifetime)', value: 3.1, color: '#A8DADC' },
    { name: 'Attempted (Past Year)', value: 0.3, color: '#457B9D' },
  ];

  // Reusable Pie Chart
  const renderPieChart = (data, title) => (
    <div className="w-full md:w-1/3 flex flex-col items-center mb-6 px-4">
      <h3 className="text-2xl font-semibold text-gray-300 mb-4">{title}</h3>
      <PieChart
        width={300}
        height={300}
        margin={{ top: -30, right: 20, bottom: 0, left: 20 }}
      >
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={110}
          labelLine={false}
          dataKey="value"
          label={renderCustomLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-black px-6">
      <div className="w-full max-w-7xl p-8 md:p-10 bg-gray-800 rounded-2xl shadow-lg text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-red-400 mb-4 text-center">
          Suicide in Canada: Key Statistics
        </h2>
        <hr className="border-gray-600 mb-4" />

        <h3 className="text-3xl font-semibold text-gray-300 mb-2 text-center">
          Deaths and Hospitalizations
        </h3>

        <ul className="list-disc list-inside space-y-3 text-2xl text-center">
          <li>
            <span className="font-semibold text-red-400">12 people</span> die by
            suicide each day.
          </li>
          <li>
            Approximately{' '}
            <span className="font-semibold text-red-400">4,500 deaths</span> by
            suicide per year.
          </li>
          <li>
            Suicide rates are approximately{' '}
            <span className="font-semibold text-red-400">3 times higher</span>{' '}
            among men compared to women.
          </li>
          <li>
            Suicide is the{' '}
            <span className="font-semibold text-red-400">
              2nd leading cause of death
            </span>{' '}
            among youth and young adults (15-34 years).
          </li>
        </ul>

        <div className="mt-4 p-4 bg-gray-700 rounded-lg text-xl text-center">
          <p>
            If you or someone you know is struggling, please reach out to a
            mental health professional.
            <span className="block font-bold text-red-400 mt-2 text-2xl">
              You are not alone.
            </span>
          </p>
        </div>

        {/* Pie Charts Section */}
        <div className="mt-8 text-center">
          <h3 className="text-3xl font-semibold text-gray-300 mb-4">
            Behaviours Related to Suicide
          </h3>
          <p className="text-lg text-gray-300 mb-4">
            Published data may underestimate the total number of reported
            deaths, attempts, plans, and thoughts of suicide due to stigma and
            other factors.
          </p>

          {/* Three Pie Charts */}
          <div className="flex flex-wrap justify-center">
            {renderPieChart(thoughtsData, 'Suicidal Thoughts')}
            {renderPieChart(plansData, 'Suicidal Plans')}
            {renderPieChart(attemptsData, 'Suicidal Attempts')}
          </div>
        </div>

        {/* Source Text */}
        <div className="mt-4 pb-2 pl-4 text-left">
          <p className="text-sm text-gray-400">
            Source - World Health Organization (WHO)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
