'use client';

import dynamic from 'next/dynamic';
import { techStacks } from '@/lib/techStacks'; 

const ClientTechIcon = dynamic(() => import('@/components/ClientTechIcon'), {
    ssr: false,
});

export default function TechIconClientWrapper() {
    return (
        <div className="flex flex-wrap items-center justify-start gap-4">
            {techStacks.map((item, index) => (
                <ClientTechIcon key={index} icon={item.icon} color={item.color} />
            ))}
        </div>
    );
}