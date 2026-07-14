import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="w-full max-w-full min-h-[60vh] flex flex-col items-center justify-center space-y-6 font-mono text-text-main text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-accent-main">[ 404 ]</h1>
            <p className="text-sm md:text-base opacity-75 max-w-md leading-relaxed">
                SYS_ERR // The requested address could not be resolved on this system.
            </p>
            <Link href="/" className="px-4 py-2 border border-card-border hover:border-accent-main bg-[#0D0D0D]/60 rounded-md text-xs uppercase tracking-wider transition-all">
                [/back_home]
            </Link>
        </main>
    );
}
