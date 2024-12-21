export const FadeInDown = (delay) => {
    return {
        hidden: {
            scale: 0, // Dimulai dari skala kecil
            opacity: 0, // Tidak terlihat
        },
        show: {
            scale: 1, // Kembali ke skala normal
            opacity: 1, // Menjadi terlihat
            transition: {
                type: 'tween',
                duration: 1, // Durasi animasi
                delay: delay, // Penundaan sebelum animasi
                ease: [0.25, 0.25, 0.25, 0.75] // Memastikan animasi smooth
            }
        }
    }
}