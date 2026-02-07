"use client";
import { motion } from "framer-motion";

export default function ClientTechIcon({ icon, color }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-4 text-4xl ${color}`}>
            {icon}
        </motion.div>
    );
}
