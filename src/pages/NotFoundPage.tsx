import { Link } from 'react-router-dom';

function NotFoundPage() {
    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-8">
            <div className="text-center max-w-[500px]">
                {/* Error Code */}
                <h1 className="font-display text-[8rem] font-bold bg-linear-to-br from-white to-sky-800 bg-clip-text text-transparent leading-none mb-4">
                    404
                </h1>

                {/* Error Title */}
                <h2 className="font-display text-3xl font-semibold text-white mb-3">
                    Page Not Found
                </h2>

                {/* Error Description */}
                <p className="font-sans text-base text-gray-400 leading-relaxed mb-8">
                    The page you're looking for doesn't exist.
                </p>

                {/* Home Button */}
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 font-sans text-[0.9375rem] font-medium bg-[#075985] text-white rounded-xl transition-all duration-200 hover:bg-[#0c4a6e] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(7,89,133,0.3)]"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
