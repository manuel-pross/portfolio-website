import imageUrl from "@/assets/images/profile_image_circular.png";
import { motion } from "motion/react";

function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
    >
      <img
        className="w-[298px] md:w-[498px] h-auto my-0 mx-auto"
        src={imageUrl}
        alt="A personal photo of Manuel Proß"
      />
    </motion.div>
  );
}

export default ProfilePhoto;
