import { Search, Users, Star, CheckCircle } from 'lucide-react';

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
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						How It Works
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Getting started with Easy Body is simple. Follow these three easy
						steps to find your perfect fitness match.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{steps.map((step, index) => (
						<div key={index} className="text-center">
							<div className="relative">
								<div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
									<step.icon className="h-8 w-8 text-primary-600" />
								</div>
								{index < steps.length - 1 && (
									<div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8">
										<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary-600 rounded-full"></div>
									</div>
								)}
							</div>
							<h3 className="text-xl font-semibold text-gray-900 mb-4">
								{step.title}
							</h3>
							<p className="text-gray-600">{step.description}</p>
						</div>
					))}
				</div>

				<div className="mt-16 text-center">
					<div className="bg-primary-50 rounded-2xl p-8 max-w-4xl mx-auto">
						<CheckCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Ready to Get Started?
						</h3>
						<p className="text-lg text-gray-600 mb-6">
							Join thousands of satisfied clients who have found their perfect
							fitness match through Vertex.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<button className="btn btn-primary btn-lg">
								Find Gyms Near Me
							</button>
							<button className="btn btn-outline btn-lg">
								Browse Trainers
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
