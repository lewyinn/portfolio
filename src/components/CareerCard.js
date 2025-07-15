export default function CareerCard({ icon: Icon, title, deskripsi }) {
    return (
        <div className="flex flex-1 min-w-[280px] max-w-full md:basis-[calc(50%-12px)] gap-6 p-5 rounded-xl bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 transition-transform hover:scale-[1.02] duration-300">
            <div className="p-4 rounded-3xl bg-gray-200 dark:bg-gray-700">
                <Icon size={36} className="text-gray-900 dark:text-white" />
            </div>
            <div>
                <h1 className="text-base font-semibold mb-1 text-gray-900 dark:text-white">{title}</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{deskripsi}</p>
            </div>
        </div>
    );
}