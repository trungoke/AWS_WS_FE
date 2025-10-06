import { Search, Users, Star, CheckCircle, Zap, Dumbbell } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

const steps = [
	{
		icon: Search,
		title: 'Search & Filter',
		description:
			'Use our advanced search to find gyms and trainers based on location, price, availability, and ratings.',
	},
	{
		icon: Users,
		title: 'Connect & Book',
		description:
			'Browse profiles, read reviews, and book sessions directly with your chosen gym or trainer.',
	},
	{
		icon: Star,
		title: 'Train & Review',
		description:
			'Attend your sessions, track your progress, and leave reviews to help others make informed decisions.',
	},
];

export function HowItWorks() {
	return (
		<section className="py-24 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
			{/* Dynamic Background */}
			<div className="absolute inset-0 bg-mesh opacity-20" />
			<div className="absolute inset-0">
				<div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[150px] animate-float" />
				<div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-700/8 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

				{/* Section Header */}
				<div className="text-center mb-20 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
						{/* <Zap className="w-5 h-5 text-primary-500 animate-pulse" /> */}
						<span className="text-sm font-black text-white uppercase tracking-wider">
							Simple <span className="text-gradient">Process</span>
						</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
						HOW IT <span className="text-neon">WORKS</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Getting started with <span className="text-gradient font-bold">Vertex</span> is simple. Follow these three easy steps to find your perfect fitness match and begin your transformation.
					</p>
				</div>

				{/* 3D Steps with Interactive Effects */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
					{steps.map((step, index) => (
						<div
							key={index}
							className="group relative perspective-1000 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							{/* Connection Line */}
							{index < steps.length - 1 && (
								<div className="hidden md:block absolute top-20 left-full w-full z-0">
									<div className="relative h-px w-[calc(100%-2rem)] ml-8">
										<div className="absolute inset-0 bg-gradient-to-r from-primary-600/50 via-primary-500/30 to-primary-600/50" />
										<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-primary-600 rounded-full shadow-glow animate-pulse" />
									</div>
								</div>
							)}

							<div className="relative transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-6">
								{/* 3D Step Card */}
								<div className="glass-card rounded-3xl p-8 text-center shadow-3d-lg group-hover:shadow-neon border border-primary-600/20 group-hover:border-primary-600/50">
									{/* Animated glow border */}
									<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />

									{/* Step Number with Epic Design */}
									<div className="relative mb-8">
										<div className="absolute inset-0 bg-primary-600 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
										<div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 rounded-2xl flex items-center justify-center shadow-neon group-hover:shadow-neon-lg transition-all duration-500 transform-3d group-hover:scale-125 group-hover:rotate-12">
											<step.icon className="h-10 w-10 text-white group-hover:scale-125 transition-transform duration-300" />
										</div>

										{/* Step number badge */}
										<div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-glow text-white font-black text-sm">
											{index + 1}
										</div>
									</div>

									{/* Content */}
									<div className="relative">
										<h3 className="text-2xl font-black text-white mb-4 group-hover:text-gradient transition-all duration-300">
											{step.title}
										</h3>
										<p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
											{step.description}
										</p>
									</div>

									{/* Shine effect */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-3xl" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Epic CTA Section */}
				<div className="text-center animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
					<div className="relative perspective-1000">
						<div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto shadow-3d-lg border border-primary-600/30 transform-3d hover:scale-[1.02] transition-all duration-500">
							{/* Animated background */}
							<div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-primary-800/5 rounded-3xl" />

							<div className="relative">
								<div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 mb-8 shadow-neon mx-auto">
									<CheckCircle className="h-10 w-10 text-white" />
								</div>

								<h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
									Ready to <span className="text-gradient">Get Started?</span>
								</h3>

								<p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
									Join thousands of satisfied clients who have found their perfect fitness match through <span className="text-gradient font-bold">Vertex</span>
								</p>

								<div className="flex flex-col sm:flex-row gap-6 justify-center">
									{/* <Link href="/gyms">
										<Button className="btn-primary btn-lg group px-12 py-4 shadow-neon relative overflow-hidden">
											<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
											<Dumbbell className="w-6 h-6 mr-3 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
											<span className="relative z-10 font-black">Find Gyms Near Me</span>
										</Button>
									</Link> */}

									{/* <Link href="/trainers">
										<Button className="btn-outline btn-lg group px-12 py-4">
											<Users className="w-6 h-6 mr-3 group-hover:scale-125 transition-transform duration-300" />
											<span className="font-black group-hover:text-white transition-colors">Browse Trainers</span>
										</Button>
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Epic glow lines */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent" />
		</section>
	);
}

