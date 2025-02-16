// src/pages/Home.jsx
import React from 'react';

function Home() {
	return (
		<div className="flex flex-col items-center px-6 py-12 w-full">
			<div className="w-full flex flex-col items-center">
				<div className="max-w-3xl text-center">
					<h2 className="text-4xl font-bold text-black leading-tight">
						You Are Not Alone: Hope, Help, and Healing
					</h2>
					<p className="mt-6 text-lg text-gray-100 leading-relaxed">
						Life can feel overwhelming at times...
						{/* rest of your content here */}
					</p>
					{/* ... the rest of your content blocks ... */}
				</div>
			</div>
		</div>
	);
}

export default Home;
