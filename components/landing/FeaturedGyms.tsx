import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Star, MapPin, Clock, Users } from 'lucide-react';

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
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Featured Gyms
					</h2>
					<p className="text-lg text-gray-600">
						Discover top-rated gyms in your area with premium facilities and expert
						trainers
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{featuredGyms.map((gym) => (
						<Card
							key={gym.id}
							className="overflow-hidden hover:shadow-lg transition-shadow"
						>
							<div className="aspect-w-16 aspect-h-9">
								<img
									src={gym.image}
									alt={gym.name}
									className="w-full h-48 object-cover"
								/>
							</div>
							<CardContent className="p-6">
								<div className="flex items-start justify-between mb-2">
									<h3 className="text-xl font-semibold text-gray-900">
										{gym.name}
									</h3>
									<div className="flex items-center text-yellow-500">
										<Star className="h-4 w-4 fill-current" />
										<span className="ml-1 text-sm font-medium">
											{gym.rating}
										</span>
										<span className="ml-1 text-sm text-gray-500">
											({gym.reviewCount})
										</span>
									</div>
								</div>

								<div className="flex items-center text-gray-600 mb-2">
									<MapPin className="h-4 w-4 mr-1" />
									<span className="text-sm">{gym.location}</span>
								</div>

								<p className="text-gray-600 text-sm mb-4 line-clamp-2">
									{gym.description}
								</p>

								<div className="flex flex-wrap gap-1 mb-4">
									{gym.amenities.slice(0, 3).map((amenity) => (
										<span
											key={amenity}
											className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
										>
											{amenity}
										</span>
									))}
									{gym.amenities.length > 3 && (
										<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
											+{gym.amenities.length - 3} more
										</span>
									)}
								</div>

								<div className="flex items-center justify-between">
									<div className="text-2xl font-bold text-primary-600">
										${gym.price}
										<span className="text-sm font-normal text-gray-500">
											/month
										</span>
									</div>
									<Link href={`/gyms/${gym.id}`}>
										<Button>View Details</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="text-center mt-12">
					<Link href="/gyms">
						<Button size="lg">View All Gyms</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
