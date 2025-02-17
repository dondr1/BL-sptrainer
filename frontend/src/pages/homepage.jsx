import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const InfiniteSlider = ({ children }) => {
	return (
		<div
			className="relative overflow-hidden w-screen"
			style={{ marginLeft: 'calc(-50vw + 50%)' }}>
			<motion.div
				className="flex gap-4 px-6"
				animate={{ x: [0, -3840] }}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 50,
						ease: 'linear',
					},
				}}>
				{children}
				{children}
				{children}
				{children}
				{children}
				{children}
			</motion.div>
		</div>
	);
};

const Home = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const originalStyle = window.getComputedStyle(document.body).overflow;
		document.body.style.overflow = 'hidden';
		document.documentElement.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = originalStyle;
			document.documentElement.style.overflow = originalStyle;
		};
	}, []);

	const cards = [
		{
			title: 'Prevention is Possible',
			content:
				'Most individuals seeking help want relief from pain, not death. Your intervention can save lives.',
		},
		{
			title: 'Connection Matters',
			content:
				'Active listening and genuine empathy create a safe space for healing and hope.',
		},
		{
			title: 'Support Networks',
			content:
				'Professional help, combined with community support, builds resilience and recovery.',
		},
		{
			title: 'Training Works',
			content:
				'Learning crisis intervention techniques increases confidence in handling difficult conversations.',
		},
	];

	return (
		<div
			style={{
				height: '100vh',
				maxHeight: '100vh',
				overflow: 'hidden',
				position: 'fixed',
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
			}}
			className="flex flex-col items-center justify-center w-screen text-center">
			<div className="relative h-[72px] whitespace-nowrap mb-6">
				<div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-transparent to-purple-100 blur-xl opacity-50" />
				<TypeAnimation
					sequence={[
						'Training Voices of Hope',
						3000,
						'Empowering Through Guidance',
						3000,
						'Creating Hope',
						3000,
						'Bringing Light to Darkness',
						3000,
					]}
					wrapper="h2"
					speed={25}
					repeat={Infinity}
					className="relative text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 leading-tight inline-block"
				/>
			</div>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="mt-6 text-xl text-black leading-relaxed max-w-3xl mx-auto">
				This platform trains individuals in suicide prevention, helping them
				provide guidance when it matters most.
			</motion.p>
			<div className="mt-2">
				<InfiniteSlider>
					{cards.map((item, index) => (
						<div key={index} className="flex-shrink-0 w-[300px] p-6 space-y-3">
							<h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
								{item.title}
							</h3>
							<p className="text-black opacity-80">{item.content}</p>
						</div>
					))}
				</InfiniteSlider>
			</div>
			<button
				onClick={() => navigate('/login')}
				className="bg-[rgb(53,53,53)] text-white py-3 px-16 rounded-full border border-[rgb(53,53,53)] hover:bg-[rgb(63,63,63)] transition mt-8 flex items-center space-x-2">
				<span>Talk to our Simulator</span>
				<i className="bx bx-chevrons-right text-xl"></i>
			</button>
		</div>
	);
};

export default Home;
