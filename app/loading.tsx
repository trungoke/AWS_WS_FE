export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 bg-mesh opacity-20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-700/10 rounded-full blur-[140px] animate-float" />
      </div>

      <div className="relative z-10 text-center">
        {/* Animated Spinner */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-primary-600/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-primary-600 rounded-full animate-spin" />
        </div>

        {/* Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black text-white">
            LOADING<span className="text-gradient animate-pulse">...</span>
          </h2>
          <p className="text-gray-400 text-sm uppercase tracking-wider font-bold">
            Preparing your experience
          </p>
        </div>
      </div>
    </div>
  );
}
