import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Star, MapPin, Clock, Users, Building2, Heart, ArrowRight } from 'lucide-react';

// Mock data - in real app, this would come from API
const featuredGyms = [
	{
		id: '1',
		name: 'FitLife Gym',
		location: 'Downtown, New York',
		rating: 4.8,
		reviewCount: 124,
		price: 89,
		image: '/api/placeholder/300/200',
		amenities: ['Parking', 'Pool', 'Sauna', 'Group Classes'],
		description:
			'State-of-the-art fitness facility with premium equipment and expert trainers.',
	},
	{
		id: '2',
		name: 'PowerHouse Fitness',
		location: 'Midtown, Los Angeles',
		rating: 4.6,
		reviewCount: 89,
		price: 75,
		image: '/api/placeholder/300/200',
		amenities: ['Parking', 'Locker Rooms', 'Personal Training'],
		description:
			'Professional training environment focused on strength and conditioning.',
	},
	{
		id: '3',
		name: 'Zen Wellness Center',
		location: 'Westside, San Francisco',
		rating: 4.9,
		reviewCount: 156,
		price: 120,
		image: '/api/placeholder/300/200',
		amenities: ['Yoga Studio', 'Meditation Room', 'Spa Services'],
		description:
			'Holistic approach to fitness with yoga, pilates, and wellness programs.',
	},
];

export function FeaturedGyms() {
	return (
		<section className="py-24 bg-black relative overflow-hidden">
			{/* Animated Background */}
			<div className="absolute inset-0 bg-mesh opacity-30" />
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary-600 to-transparent" />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-20 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
						<Building2 className="w-5 h-5 text-primary-500 animate-pulse" />
						<span className="text-sm font-black text-white uppercase tracking-wider">
							Premium <span className="text-gradient">Facilities</span>
						</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
						FEATURED <span className="text-neon">GYMS</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Train at the most{' '}
						<span className="text-primary-400 font-bold">elite facilities</span> with
						state-of-the-art equipment and world-class amenities
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredGyms.map((gym, index) => (
						<div
							key={gym.id}
							className="group perspective-1000 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div className="relative transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-6">
								{/* 3D Card with Glassmorphism */}
								<div className="glass-card rounded-3xl overflow-hidden shadow-3d-lg group-hover:shadow-neon-lg border border-primary-600/20 group-hover:border-primary-600/50">
									{/* Glowing border */}
									<div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-30 blur transition duration-500" />

									{/* Image with Parallax Effect */}
									<div className="relative h-64 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
										<img
											src={gym.image}
											alt={gym.name}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>

										{/* Floating badges */}
										<div className="absolute top-4 left-4 z-20">
											<div className="badge badge-primary animate-pulse">
												<Star className="w-3 h-3 mr-1" />
												{gym.rating}
											</div>
										</div>

										<div className="absolute top-4 right-4 z-20">
											<button className="w-12 h-12 glass-card rounded-xl flex items-center justify-center border border-primary-600/30 hover:border-primary-600 hover:shadow-glow transition-all duration-300 group/heart">
												<Heart className="w-5 h-5 text-primary-500 group-hover/heart:scale-125 group-hover/heart:text-primary-400 transition-all duration-300" />
											</button>
										</div>
									</div>

									{/* Content with 3D Typography */}
									<div className="p-8 relative">
										<h3 className="text-2xl font-black text-white mb-3 group-hover:text-gradient transition-all duration-300">
											{gym.name}
										</h3>

										<div className="flex items-center text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
											<MapPin className="h-4 w-4 mr-2 text-primary-500" />
											<span className="text-sm font-medium">{gym.location}</span>
										</div>

										<p className="text-gray-500 text-sm mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors">
											{gym.description}
										</p>

										{/* Amenities with Micro-animations */}
										<div className="flex flex-wrap gap-2 mb-6">
											{gym.amenities.slice(0, 3).map((amenity, i) => (
												<span
													key={amenity}
													className="text-xs px-3 py-1 rounded-full bg-primary-600/10 text-primary-400 border border-primary-600/30 font-bold uppercase tracking-wider hover:bg-primary-600/20 hover:scale-110 transition-all duration-300"
													style={{ animationDelay: `${i * 0.1}s` }}
												>
													{amenity}
												</span>
											))}
											{gym.amenities && gym.amenities.length > 3 && (
												<span className="text-xs px-3 py-1 rounded-full bg-dark-700/50 text-gray-400 border border-dark-600 font-bold">
													+{gym.amenities.length - 3}
												</span>
											)}
										</div>

										{/* Price and CTA */}
										<div className="flex items-center justify-between">
											<div>
												<div className="text-3xl font-black text-gradient">
													${gym.price}
												</div>
												<div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
													per month
												</div>
											</div>

											<Link href={`/gyms/${gym.id}`}>
												<Button className="btn-primary btn-sm shadow-glow group/btn relative overflow-hidden">
													<div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
													<span className="relative z-10">View Details</span>
													<ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
												</Button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button with Epic Effect */}
				<div
					className="text-center mt-16 animate-fade-in-up"
					style={{ animationDelay: '0.8s' }}
				>
					<Link href="/gyms">
						<Button className="btn-primary btn-lg group px-16 py-5 text-xl shadow-neon-lg relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary-400 via-white/20 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<Building2 className="w-6 h-6 mr-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
							<span className="relative z-10 font-black tracking-wider">
								VIEW ALL GYMS
							</span>
							<ArrowRight className="w-6 h-6 ml-4 relative z-10 group-hover:translate-x-3 transition-transform duration-300" />

							{/* Animated shine effect */}
							<div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
						</Button>
					</Link>
				</div>
			</div>

			{/* Floating elements */}
			<div className="absolute top-20 right-10 opacity-10 animate-float hidden xl:block">
				<div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-600/20 to-primary-800/20 backdrop-blur-xl border border-primary-600/30 flex items-center justify-center">
					<Building2 className="w-16 h-16 text-primary-500" />
				</div>
			</div>
		</section>
	);
}

