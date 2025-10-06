import { Star, Quote } from 'lucide-react';

const testimonials = [
	{
		id: 1,
		name: 'Sarah Johnson',
		role: 'Client',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'Vertex helped me find the perfect gym just 5 minutes from my office. The trainer I connected with has been amazing, and I\'ve seen incredible results in just 3 months!',
		date: '2 weeks ago',
	},
	{
		id: 2,
		name: 'Michael Chen',
		role: 'Fitness Enthusiast',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'As a busy professional, I needed flexibility in my workout schedule. Vertex connected me with a trainer who offers early morning sessions that fit perfectly with my routine.',
		date: '1 month ago',
	},
	{
		id: 3,
		name: 'Emily Rodriguez',
		role: 'Gym Member',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'The variety of gyms and trainers available through Vertex is incredible. I was able to compare prices, read reviews, and find exactly what I was looking for.',
		date: '3 weeks ago',
	},
	{
		id: 4,
		name: 'David Thompson',
		role: 'Personal Training Client',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'I\'ve been using Vertex for over a year now. The platform makes it so easy to discover new gyms and trainers, and the booking process is seamless.',
		date: '2 months ago',
	},
	{
		id: 5,
		name: 'Lisa Anderson',
		role: 'Fitness Beginner',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'The reviews and ratings on Vertex are so helpful. I was able to find a trainer who specializes in injury rehabilitation, which was exactly what I needed.',
		date: '1 month ago',
	},
	{
		id: 6,
		name: 'James Wilson',
		role: 'Student',
		image: '/api/placeholder/100/100',
		rating: 5,
		text: 'Vertex made it affordable for me to access quality personal training. The student discounts and flexible payment options are fantastic!',
		date: '3 weeks ago',
	},
];

export function Testimonials() {
	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						What Our Clients Say
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Don&apos;t just take our word for it. Here&apos;s what real clients have
						to say about their Easy Body experience.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="flex items-center mb-4">
								<div className="flex text-yellow-400">
									{[...Array(testimonial.rating)].map((_, i) => (
										<Star key={i} className="h-4 w-4 fill-current" />
									))}
								</div>
							</div>

							<div className="relative mb-4">
								<Quote className="h-6 w-6 text-primary-200 absolute -top-2 -left-2" />
								<p className="text-gray-600 italic pl-4">
									"{testimonial.text}"
								</p>
							</div>

							<div className="flex items-center">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-12 h-12 rounded-full object-cover"
								/>
								<div className="ml-4">
									<h4 className="font-semibold text-gray-900">
										{testimonial.name}
									</h4>
									<p className="text-sm text-gray-600">{testimonial.role}</p>
									<p className="text-sm text-gray-500">
										{testimonial.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="bg-white rounded-2xl p-8 shadow-sm">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Join Our Community
						</h3>
						<p className="text-lg text-gray-600 mb-6">
							Over 10,000 satisfied clients have found their perfect fitness match
							through Vertex.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="btn btn-primary btn-lg">
								Start Your Journey
							</button>
							<button className="btn btn-outline btn-lg">
								Read More Reviews
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
