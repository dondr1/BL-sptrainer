// src/pages/Home.jsx
import React from 'react';

function Home() {
	return (
		<div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6 py-12">
			<div className="max-w-3xl text-center">
				<h2 className="text-4xl font-bold text-blue-400 leading-tight">
					You Are Not Alone: Hope, Help, and Healing
				</h2>
				<p className="mt-6 text-lg text-gray-300 leading-relaxed">
					Life can feel overwhelming at times, and for some, the weight of pain
					and hopelessness can seem unbearable. But no matter what you’re going
					through,{' '}
					<span className="text-blue-300 font-semibold">
						you are not alone.
					</span>{' '}
					This website is here to remind you that there is{' '}
					<span className="text-green-300 font-semibold">
						hope, support, and help available.
					</span>{' '}
					You matter, your feelings are valid, and there are people who care
					about you and want to see you heal.
				</p>

				<div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
					<h3 className="text-2xl font-semibold text-blue-300">
						What You’ll Find Here
					</h3>
					<ul className="mt-4 space-y-3 text-gray-300">
						<li>
							<span className="text-green-300 font-semibold">
								• Crisis Support:
							</span>{' '}
							Immediate helplines and professional services for those in urgent
							need.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Understanding Suicidal Thoughts:
							</span>{' '}
							Information on what leads to these feelings and how to address
							them.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Helping a Loved One:
							</span>{' '}
							Guidance on supporting someone who is struggling.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Coping Strategies:
							</span>{' '}
							Techniques for managing overwhelming emotions and building
							resilience.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Stories of Hope:
							</span>{' '}
							Personal stories from individuals who have overcome difficult
							times.
						</li>
					</ul>
				</div>

				<div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
					<h3 className="text-2xl font-semibold text-green-300">
						You Deserve Support
					</h3>
					<p className="mt-4 text-gray-300 leading-relaxed">
						If you are feeling hopeless, please know that your pain is not
						permanent. There are people who care about you and want to help.
						It’s okay to ask for support, whether from a friend, family member,
						therapist, or crisis hotline.{' '}
						<span className="text-blue-300 font-semibold">
							You don’t have to face this alone.
						</span>
					</p>
				</div>

				<p className="mt-8 text-gray-400">
					If you or someone you know is in immediate danger,{' '}
					<span className="text-red-400 font-semibold">
						please reach out to a crisis helpline
					</span>{' '}
					or seek professional help. You are not alone, and there is always a
					way forward.
				</p>

				<button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
					Get Help Now
				</button>
			</div>
		</div>
	);
}

export default Home;
