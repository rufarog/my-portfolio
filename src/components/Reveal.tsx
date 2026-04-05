import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Start invisible and 30px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true, margin: "-100px" }} // Trigger once when 100px into view
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}