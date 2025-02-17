import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const InfiniteSlider = ({ children }) => {
	return (
		<div
			className="relative overflow-hidden w-screen"
			style={{ marginLeft: 'calc(-50vw + 50%)' }}>
			<motion.div
				className="flex gap-4 px-6"
				animate={{
					x: [0, -2000],
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: 'loop',
						duration: 30,
						ease: 'linear',
					},
				}}>
				{children}
				{children}
				{children}
			</motion.div>
		</div>
	);
};

const About = () => {
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
		<div className="h-screen flex flex-col items-center px-6 pt-4 w-full text-center">
			<div className="w-full flex flex-col items-center">
				<div className="w-full max-w-5xl text-center relative">
					<div className="relative h-[72px] whitespace-nowrap mb-6">
						<div className="absolute inset-0 bg-gradient-to-r from-purple-100 via-transparent to-purple-100 blur-xl opacity-50" />
						<TypeAnimation
							sequence={[
								'Understanding Prevention',
								3000,
								'Building Connection',
								3000,
								'Creating Hope',
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

					<div className="mt-6">
						<InfiniteSlider>
							{cards.map((item, index) => (
								<div
									key={index}
									className="flex-shrink-0 w-[300px] p-6 space-y-3">
									<h3 className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
										{item.title}
									</h3>
									<p className="text-black opacity-80">{item.content}</p>
								</div>
							))}
						</InfiniteSlider>
					</div>

					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						className="mt-6 text-lg text-black opacity-80 max-w-3xl mx-auto">
						By learning these skills, you become part of a community dedicated
						to bringing light to darkness and hope to those in need.
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default About;
