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
					This app is here to remind you that there is{' '}
					<span className="text-green-300 font-semibold">
						hope, support, and guidance available.
					</span>{' '}
					You matter, your feelings are valid, and there are tools to help you
					navigate through tough times at your own pace.
				</p>

				<div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
					<h3 className="text-2xl font-semibold text-blue-300">
						What You’ll Find Here
					</h3>
					<ul className="mt-4 space-y-3 text-gray-300">
						<li>
							<span className="text-green-300 font-semibold">
								• Talk to an AI for Immediate Support:
							</span>{' '}
							Chat with an AI that listens, understands, and gently guides you
							through your thoughts and emotions.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Track Your Emotional Progress:
							</span>{' '}
							Get personalized reports on how you’re doing after moments of
							distress and receive helpful exercises tailored to your needs.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Guided Breathing & Meditation:
							</span>{' '}
							Calm your mind with relaxation techniques designed to help you
							manage anxiety and overwhelming thoughts.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Personalized Coping Strategies:
							</span>{' '}
							Receive scientifically-backed exercises and tips to help you cope
							with difficult emotions and develop resilience.
						</li>
						<li>
							<span className="text-green-300 font-semibold">
								• Community and Peer Support:
							</span>{' '}
							Connect with others who understand what you’re going through in a
							safe and supportive space.
						</li>
					</ul>
				</div>

				<div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg text-left">
					<h3 className="text-2xl font-semibold text-green-300">
						You Deserve Support
					</h3>
					<p className="mt-4 text-gray-300 leading-relaxed">
						If you are feeling hopeless, please know that your pain is not
						permanent. This app is here to support you, guide you, and provide
						tools to help you heal. It’s okay to take small steps forward.
						Whether through AI-guided support, calming exercises, or tracking
						your progress,{' '}
						<span className="text-blue-300 font-semibold">
							you don’t have to face this alone.
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
					Start Your Journey
				</button>
			</div>
		</div>
	);
}

export default Home;
