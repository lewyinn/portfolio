export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 transition-colors duration-500">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 dark:border-t-blue-400 animate-spin"></div>
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-300 dark:border-gray-700"></div>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm animate-pulse">Preparing your dashboard...</p>
        </div>
    );
}
