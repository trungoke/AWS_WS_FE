import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Star, Award, Users, ArrowRight, Dumbbell } from 'lucide-react';

// Mock data - in real app, this would come from API
const featuredTrainers = [
	{
		id: '1',
		name: 'Alex Martinez',
		profileImage: '/api/placeholder/200/200',
		specialties: ['Weight Loss', 'Strength Training', 'Nutrition'],
		rating: 4.9,
		reviewCount: 127,
		experience: 8,
		hourlyRate: 95,
	},
	{
		id: '2',
		name: 'Sarah Chen',
		profileImage: '/api/placeholder/200/200',
		specialties: ['Yoga', 'Flexibility', 'Mindfulness'],
		rating: 5.0,
		reviewCount: 203,
		experience: 12,
		hourlyRate: 110,
	},
	{
		id: '3',
		name: 'Marcus Johnson',
		profileImage: '/api/placeholder/200/200',
		specialties: ['HIIT', 'Cardio', 'Sports Performance'],
		rating: 4.8,
		reviewCount: 156,
		experience: 10,
		hourlyRate: 100,
	},
	{
		id: '4',
		name: 'Emily Rodriguez',
		profileImage: '/api/placeholder/200/200',
		specialties: ['Pilates', 'Core Training', 'Rehabilitation'],
		rating: 4.9,
		reviewCount: 178,
		experience: 9,
		hourlyRate: 105,
	},
];

export function FeaturedTrainers() {
	return (
		<section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
			{/* Epic Background with Parallax */}
			<div className="absolute inset-0 bg-mesh opacity-20" />
			<div className="absolute inset-0">
				<div className="absolute top-10 right-10 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
				<div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-primary-800/8 rounded-full blur-[130px] animate-float" style={{ animationDelay: '2s' }} />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-20 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
						<Award className="w-5 h-5 text-primary-500 animate-pulse" />
						<span className="text-sm font-black text-white uppercase tracking-wider">
							Elite <span className="text-gradient">Trainers</span>
						</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
						MEET YOUR <span className="text-neon">COACHES</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Connect with <span className="text-primary-400 font-bold">certified professionals</span> who are ready to transform your fitness journey into a <span className="text-gradient font-bold">success story</span>.
					</p>
				</div>

				{/* Dynamic Background Pattern */}
				<div className="absolute inset-0 opacity-10">
					<div className="absolute top-1/4 left-1/4 text-primary-600/20">
						<Dumbbell className="w-32 h-32 animate-float" />
					</div>
					<div className="absolute bottom-1/4 right-1/4 text-primary-600/20">
						<Award className="w-24 h-24 animate-float" style={{ animationDelay: '1.5s' }} />
					</div>
				</div>

				{/* Trainers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
					{featuredTrainers.map((trainer, index) => (
						<div
							key={trainer.id}
							className="group perspective-1000 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.15}s` }}
						>
							<div className="relative transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-4">
								{/* 3D Card */}
								<div className="glass-card rounded-3xl overflow-hidden shadow-3d-lg group-hover:shadow-neon border border-primary-600/20 group-hover:border-primary-600/50 h-full">
									{/* Animated glow border */}
									<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700" />

									{/* Profile Image with Epic Effects */}
									<div className="relative p-8 pb-4">
										<div className="relative mx-auto w-32 h-32 perspective-1000">
											<div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 rounded-full blur-lg opacity-0 group-hover:opacity-50 animate-glow-pulse" />
											<div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary-600/50 group-hover:border-primary-500 shadow-neon group-hover:shadow-neon-lg transition-all duration-500 transform-3d group-hover:scale-110 group-hover:rotate-6">
												<img
													src={trainer.profileImage}
													alt={trainer.name}
													className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
												/>
											</div>

											{/* Status indicator */}
											<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
												<div className="flex items-center gap-1 px-3 py-1 rounded-full glass-card border border-green-500/50 shadow-glow">
													<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
													<span className="text-xs text-green-400 font-bold uppercase">Available</span>
												</div>
											</div>
										</div>
									</div>

									{/* Content with Typography Effects */}
									<div className="px-8 pb-8">
										<div className="text-center mb-6">
											<h3 className="text-2xl font-black text-white mb-2 group-hover:text-gradient transition-all duration-300">
												{trainer.name}
											</h3>
											<p className="text-primary-400 font-bold text-sm uppercase tracking-wider">
												{trainer.specialties[0]}
											</p>
										</div>

										{/* Rating with Stars */}
										<div className="flex items-center justify-center gap-2 mb-4">
											<div className="flex items-center">
												{[...Array(5)].map((_, i) => (
													<Star
														key={i}
														className={`w-4 h-4 transition-all duration-300 ${
															i < Math.floor(trainer.rating)
																? 'text-yellow-500 fill-yellow-500 group-hover:scale-125'
																: 'text-gray-600'
														}`}
														style={{ animationDelay: `${i * 0.1}s` }}
													/>
												))}
											</div>
											<span className="text-white font-bold">{trainer.rating}</span>
											<span className="text-gray-500 text-sm">({trainer.reviewCount})</span>
										</div>

										{/* Experience Badge */}
										<div className="flex justify-center mb-6">
											<div className="glass-card px-4 py-2 rounded-xl border border-primary-600/30">
												<span className="text-sm font-bold text-primary-400">
													{trainer.experience} Years Experience
												</span>
											</div>
										</div>

										{/* Specialties Pills */}
										<div className="flex flex-wrap gap-2 justify-center mb-6">
											{trainer.specialties.slice(0, 2).map((specialty, i) => (
												<span
													key={specialty}
													className="text-xs px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 border border-primary-600/30 font-bold uppercase tracking-wider hover:bg-primary-600/20 hover:scale-110 transition-all duration-300"
													style={{ animationDelay: `${i * 0.1}s` }}
												>
													{specialty}
												</span>
											))}
										</div>

										{/* Price and CTA */}
										<div className="text-center space-y-4">
											<div>
												<div className="text-3xl font-black text-gradient">
													${trainer.hourlyRate}
												</div>
												<div className="text-xs text-gray-500 font-bold uppercase tracking-wider">per hour</div>
											</div>

											<Link href={`/trainers/${trainer.id}`}>
												<Button className="btn-primary w-full shadow-glow group/btn relative overflow-hidden">
													<div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
													<span className="relative z-10 font-bold">VIEW PROFILE</span>
													<ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
												</Button>
											</Link>
										</div>
									</div>

									{/* Shine effect */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
										<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200 rounded-3xl" />
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
					<Link href="/trainers">
						<Button className="btn-outline btn-lg group px-16 py-5 text-xl relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<Users className="w-6 h-6 mr-4 relative z-10 group-hover:scale-125 transition-transform duration-500" />
							<span className="relative z-10 font-black tracking-wider group-hover:text-white transition-colors">VIEW ALL TRAINERS</span>
							<ArrowRight className="w-6 h-6 ml-4 relative z-10 group-hover:translate-x-3 transition-transform duration-300" />
						</Button>
					</Link>
				</div>
			</div>

			{/* Epic bottom effect */}
			<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent" />
		</section>
	);
}

