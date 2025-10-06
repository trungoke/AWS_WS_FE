'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TrainerCard } from '@/components/trainers/TrainerCard';
import { TrainerFilters } from '@/components/trainers/TrainerFilters';
import { useSearchStore } from '@/store/searchStore';
import { PersonalTrainer } from '@/types';
import { Grid, List, Filter, Users, Zap, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

// Enhanced mock data
const mockTrainers: PersonalTrainer[] = [
	{
		id: '1',
		userId: '1',
		firstName: 'Sarah',
		lastName: 'Johnson',
		phoneNumber: '+1 (555) 123-4567',
		bio: 'Certified personal trainer with 8+ years of experience specializing in weight loss, strength training, and nutrition coaching. Passionate about helping clients achieve their fitness goals through personalized programs.',
		profileImageUrl: '/api/placeholder/300/300',
		specialties: ['Weight Loss', 'Strength Training', 'Nutrition Coaching', 'HIIT'],
		certifications: ['NASM-CPT', 'Precision Nutrition Level 1', 'TRX Certified'],
		experience: 8,
		hourlyRate: 85.0,
		averageRating: 4.9,
		totalRatings: 127,
		availability: [
			{ id: '1', dayOfWeek: 1, startTime: '06:00', endTime: '20:00', isAvailable: true },
			{ id: '2', dayOfWeek: 2, startTime: '06:00', endTime: '20:00', isAvailable: true },
			{ id: '3', dayOfWeek: 3, startTime: '06:00', endTime: '20:00', isAvailable: true },
		],
		attachedGyms: ['1', '2'],
		isActive: true,
		createdAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
	},
	{
		id: '2',
		userId: '2',
		firstName: 'Mike',
		lastName: 'Rodriguez',
		phoneNumber: '+1 (555) 987-6543',
		bio: 'Elite strength & conditioning coach with Olympic lifting expertise. Former competitive athlete helping clients reach peak performance through scientific training methods.',
		profileImageUrl: '/api/placeholder/300/300',
		specialties: ['Olympic Lifting', 'Powerlifting', 'Athletic Performance', 'Injury Prevention'],
		certifications: ['CSCS', 'USAW Level 2', 'FMS Certified'],
		experience: 12,
		hourlyRate: 120.0,
		averageRating: 4.8,
		totalRatings: 89,
		availability: [
			{ id: '4', dayOfWeek: 1, startTime: '05:00', endTime: '18:00', isAvailable: true },
			{ id: '5', dayOfWeek: 3, startTime: '05:00', endTime: '18:00', isAvailable: true },
			{ id: '6', dayOfWeek: 5, startTime: '05:00', endTime: '18:00', isAvailable: true },
		],
		attachedGyms: ['1'],
		isActive: true,
		createdAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
	},
	{
		id: '3',
		userId: '3',
		firstName: 'Emma',
		lastName: 'Chen',
		phoneNumber: '+1 (555) 456-7890',
		bio: 'Holistic wellness coach specializing in yoga, pilates, and mindfulness practices. Creating balanced fitness journeys for mind, body, and spirit.',
		profileImageUrl: '/api/placeholder/300/300',
		specialties: ['Yoga', 'Pilates', 'Meditation', 'Flexibility Training'],
		certifications: ['RYT-500', 'PMA-CPT', 'Mindfulness Coach'],
		experience: 6,
		hourlyRate: 75.0,
		averageRating: 4.7,
		totalRatings: 92,
		availability: [
			{ id: '7', dayOfWeek: 2, startTime: '07:00', endTime: '19:00', isAvailable: true },
			{ id: '8', dayOfWeek: 4, startTime: '07:00', endTime: '19:00', isAvailable: true },
			{ id: '9', dayOfWeek: 6, startTime: '08:00', endTime: '16:00', isAvailable: true },
		],
		attachedGyms: ['2', '3'],
		isActive: true,
		createdAt: '2024-01-01T00:00:00Z',
		updatedAt: '2024-01-01T00:00:00Z',
	},
];

export default function TrainersPage() {
	const searchParams = useSearchParams();
	const { searchResults, isLoading, searchTrainers } = useSearchStore();
	const [trainers, setTrainers] = useState<PersonalTrainer[]>(mockTrainers);
	const [showFilters, setShowFilters] = useState(false);
	const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

	useEffect(() => {
		const query = searchParams.get('q');
		const specialty = searchParams.get('specialty');

		if (query || specialty) {
			let filteredTrainers = mockTrainers;

			if (query) {
				filteredTrainers = filteredTrainers.filter((trainer) =>
					`${trainer.firstName} ${trainer.lastName}`
						.toLowerCase()
						.includes(query.toLowerCase()) ||
					trainer.bio.toLowerCase().includes(query.toLowerCase()) ||
					trainer.specialties.some((spec) => spec.toLowerCase().includes(query.toLowerCase()))
				);
			}

			if (specialty) {
				filteredTrainers = filteredTrainers.filter((trainer) =>
					trainer.specialties.some((spec) => spec.toLowerCase().includes(specialty.toLowerCase()))
				);
			}

			setTrainers(filteredTrainers);
		}
	}, [searchParams]);

	const handleSearch = async (filters: any) => {
		await searchTrainers(filters);
	};

	return (
		<div className="min-h-screen bg-black">
			<Header />

			{/* Epic Hero Section for Trainers */}
			<section className="relative py-32 bg-black overflow-hidden">
				{/* Background with animated elements */}
				<div className="absolute inset-0 bg-mesh opacity-40" />
				<div className="absolute inset-0">
					<div className="absolute top-20 right-20 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
					<div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-primary-700/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: '1s' }} />
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16 animate-fade-in-up">
						<div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-primary-600/30 mb-8">
							<Users className="w-5 h-5 text-primary-500 animate-pulse" />
							<span className="text-sm font-black text-white uppercase tracking-wider">
                Elite <span className="text-gradient">Professionals</span>
              </span>
						</div>

						<h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              TOP <span className="text-neon">TRAINERS</span>
            </h1>
						<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Connect with <span className="text-primary-400 font-bold">certified experts</span> who will guide you to extraordinary results and unlock your true potential
            </p>
					</div>
				</div>
			</section>

			{/* Main Content */}
			<main className="relative bg-black">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

					{/* Enhanced Controls Bar */}
					<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
						<div className="flex items-center gap-4">
							<h2 className="text-2xl font-black text-white">
                Found <span className="text-gradient">{trainers.length}</span> Elite Trainers
              </h2>
							<div className="glass-card px-4 py-2 rounded-xl border border-green-500/50 shadow-glow">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
									<span className="text-sm text-green-400 font-bold">
                  {trainers.filter((t) => t.isActive).length} Available Now
                </span>
								</div>
							</div>
						</div>

						<div className="flex items-center gap-4">
							{/* View Mode Toggle with 3D effect */}
							<div className="flex rounded-xl glass-card border border-dark-700/50 p-1">
								<Button
									variant={viewMode === 'grid' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setViewMode('grid')}
									className="rounded-lg"
								>
									<Grid className="w-4 h-4" />
								</Button>
								<Button
									variant={viewMode === 'list' ? 'default' : 'ghost'}
									size="sm"
									onClick={() => setViewMode('list')}
									className="rounded-lg"
								>
									<List className="w-4 h-4" />
								</Button>
							</div>

							{/* Filter Toggle */}
							<Button
								variant="outline"
								onClick={() => setShowFilters(!showFilters)}
								className="gap-2"
							>
								<Filter className="w-4 h-4" />
                Filters
              </Button>
						</div>
					</div>

					{/* Filters Panel */}
					{showFilters && (
						<div className="mb-12 animate-fade-in-up">
							<TrainerFilters onSearch={handleSearch} />
						</div>
					)}

					{/* Trainers Grid với Epic 3D Effects */}
					<div className={cn(
						"gap-8 animate-fade-in-up",
						viewMode === 'grid'
							? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
							: "flex flex-col space-y-6"
					)}>
						{trainers.map((trainer, index) => (
							<div
								key={trainer.id}
								className="perspective-1000"
								style={{ animationDelay: `${index * 0.1}s` }}
							>
								<TrainerCard trainer={trainer} />
							</div>
						))}
					</div>

					{/* Load More Button */}
					<div className="text-center mt-16 animate-fade-in-up">
						<Button className="btn-primary btn-lg px-16 py-4 shadow-neon group relative overflow-hidden">
							<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<Users className="w-5 h-5 mr-3 relative z-10 group-hover:scale-125 transition-transform duration-300" />
							<span className="relative z-10 font-black">DISCOVER MORE TRAINERS</span>

							{/* Epic shine effect */}
							<div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
						</Button>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}

