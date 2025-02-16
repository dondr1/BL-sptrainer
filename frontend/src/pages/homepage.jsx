// src/pages/Home.jsx
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
	return (
		<div className="flex flex-col items-center px-6 py-12 w-full text-center">
			<div className="w-full flex flex-col items-center">
				<div className="max-w-3xl text-center">
					{/* Typing Animation on the Heading */}
					<TypeAnimation
						sequence={[
							'Training Voices of Hope',
							3000,
							'Empowering Through Guidance',
							3000,
							'Bringing Light to Darkness',
							3000,
						]}
						wrapper="h2"
						speed={25}
						repeat={Infinity}
						className="text-9xl font-bold text-black leading-tight relative left-[-20px]"
					/>

					<p className="mt-6 text-lg text-gray-100 leading-relaxed"></p>
				</div>
			</div>
		</div>
	);
}

export default Home;
