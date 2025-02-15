import imageUrl from "@/assets/images/profile_image_circular.png";
import { motion } from "motion/react";

function ProfilePhoto() {
  return (
    <div className="relative xl:order-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <img
          className="w-[300px] md:w-[506px] h-[300px] md:h-[506px] my-0 mx-auto mask-radial"
          src={imageUrl}
          alt="A personal photo of Manuel Proß"
        />
      </motion.div>
      <motion.svg
        className="absolute -top-1 w-[300px] md:w-[506px] h-[300px] md:h-[506px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://ww.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#9ece6a"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "15 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}

export default ProfilePhoto;
