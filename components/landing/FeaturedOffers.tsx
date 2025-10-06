import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, Tag, Building2, User, ArrowRight } from 'lucide-react';

// Mock data with discount calculations
const featuredOffers = [
	{
		id: '1',
		title: 'New Member Special - 50% Off First Month',
		gym: 'FitLife Gym',
		location: 'Downtown, New York',
		originalPrice: 89,
		salePrice: 45,
		discount: 50,
		type: 'gym',
		duration: '30 days',
		rating: 4.8,
		image: '/api/placeholder/300/200',
		description:
			'Join now and get 50% off your first month membership. Includes access to all facilities and group classes.',
	},
	{
		id: '2',
		title: 'Personal Training Package - 10 Sessions',
		trainer: 'Sarah Johnson',
		location: 'Los Angeles, CA',
		originalPrice: 850,
		salePrice: 750,
		discount: 12,
		type: 'trainer',
		duration: '10 sessions',
		rating: 4.9,
		image: '/api/placeholder/300/200',
		description:
			'Comprehensive personal training package with nutrition guidance and workout plans.',
	},
	{
		id: '3',
		title: 'Group Fitness Classes - Unlimited Access',
		gym: 'Zen Wellness Center',
		location: 'San Francisco, CA',
		originalPrice: 150,
		salePrice: 99,
		discount: 34,
		type: 'gym',
		duration: '30 days',
		rating: 4.7,
		image: '/api/placeholder/300/200',
		description:
			'Unlimited access to all group fitness classes including yoga, pilates, and meditation.',
	},
];

export function FeaturedOffers() {
	return (
		<section className="py-24 bg-gradient-to-b from-black to-dark-900 relative overflow-hidden">
			{/* Epic Background */}
			<div className="absolute inset-0 bg-mesh opacity-30" />
			<div className="absolute inset-0">
				<div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary-600/8 rounded-full blur-[150px] animate-float" />
				<div
					className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-primary-700/10 rounded-full blur-[140px] animate-float"
					style={{ animationDelay: '2s' }}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<div className="text-center mb-20 animate-fade-in-up">
					<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
						<Tag className="w-5 h-5 text-primary-500 animate-pulse" />
						<span className="text-sm font-black text-white uppercase tracking-wider">
							Limited <span className="text-gradient">Time</span>
						</span>
					</div>

					<h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
						EXCLUSIVE <span className="text-neon">OFFERS</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
						Don't miss out on these{' '}
						<span className="text-primary-400 font-bold">
							limited-time deals
						</span>{' '}
						from our premium partners. Save big on memberships and training
						sessions!
					</p>
				</div>

				{/* 3D Offers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredOffers.map((offer, index) => (
						<div
							key={offer.id}
							className="group perspective-1000 animate-fade-in-up"
							style={{ animationDelay: `${index * 0.2}s` }}
						>
							<div className="relative transform-3d transition-all duration-700 hover:scale-105 hover:-translate-y-6">
								{/* 3D Offer Card */}
								<div className="glass-card rounded-3xl overflow-hidden shadow-3d-lg group-hover:shadow-neon-lg border border-primary-600/20 group-hover:border-primary-600/50">
									{/* Glowing border */}
									<div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-700" />

									{/* Offer Badge */}
									<div className="absolute top-4 left-4 z-20">
										<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-red-800 shadow-neon text-white">
											<Tag className="w-3 h-3" />
											<span className="text-xs font-black uppercase tracking-wider">
												{offer.discount}% OFF
											</span>
										</div>
									</div>

									{/* Timer Badge */}
									<div className="absolute top-4 right-4 z-20">
										<div className="glass-card px-3 py-2 rounded-xl border border-yellow-500/50 shadow-glow">
											<div className="flex items-center gap-1">
												<Clock className="w-3 h-3 text-yellow-500 animate-pulse" />
												<span className="text-xs text-yellow-400 font-bold">
													2 Days Left
												</span>
											</div>
										</div>
									</div>

									{/* Image with Parallax */}
									<div className="relative h-48 overflow-hidden">
										<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
										<img
											src={offer.image}
											alt={offer.title}
											className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
										/>
									</div>

									{/* Content */}
									<div className="p-8">
										<div className="flex items-center gap-2 mb-3">
											{offer.type === 'gym' ? (
												<Building2 className="w-4 h-4 text-primary-500" />
											) : (
												<User className="w-4 h-4 text-primary-500" />
											)}
											<span className="text-xs text-primary-400 font-bold uppercase tracking-wider">
												{offer.type === 'gym'
													? 'Gym Offer'
													: 'Personal Training'}
											</span>
										</div>

										<h3 className="text-xl font-black text-white mb-3 group-hover:text-gradient transition-all duration-300 leading-tight">
											{offer.title}
										</h3>

										<p className="text-gray-500 text-sm mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors">
											{offer.description}
										</p>

										{/* Price with Strikethrough */}
										<div className="flex items-center justify-between mb-6">
											<div>
												<div className="flex items-baseline gap-2">
													<span className="text-2xl font-black text-gradient">
														${offer.salePrice}
													</span>
													<span className="text-lg text-gray-500 line-through">
														${offer.originalPrice}
													</span>
												</div>
												<div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
													{offer.duration}
												</div>
											</div>

											<div className="text-right">
												<div className="text-2xl font-black text-green-500">
													SAVE ${offer.originalPrice - offer.salePrice}
												</div>
											</div>
										</div>

										{/* CTA Button */}
										<Button className="btn-primary w-full shadow-glow group/btn relative overflow-hidden">
											<div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
											<span className="relative z-10 font-black">
												CLAIM OFFER
											</span>
											<ArrowRight className="w-4 h-4 ml-2 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* View All Button */}
				<div
					className="text-center mt-16 animate-fade-in-up"
					style={{ animationDelay: '0.8s' }}
				>
					<Link href="/offers">
						<Button className="btn-outline btn-lg group px-16 py-5 text-xl relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
							<Tag className="w-6 h-6 mr-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
							<span className="relative z-10 font-black tracking-wider group-hover:text-white transition-colors">
								VIEW ALL OFFERS
							</span>
							<ArrowRight className="w-6 h-6 ml-4 relative z-10 group-hover:translate-x-3 transition-transform duration-300" />
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}

