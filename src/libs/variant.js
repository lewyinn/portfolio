export const FadeInDown = (delay) => {
    return {
        hidden: {
            y: -120,  // Mulai dari posisi atas (di luar tampilan)
            opacity: 0,  // Tidak terlihat
        },
        show: {
            y: 0,  // Posisikan ke bawah setelah animasi selesai
            opacity: 1,  // Menjadi terlihat
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]  // Memastikan animasi smooth
            }
        }
    }
}