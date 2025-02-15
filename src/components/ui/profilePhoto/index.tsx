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
        className="w-[298px] h-auto xl:w-[498px] my-0 mx-auto radial-gradient"
        src={imageUrl}
        alt="A personal photo of Manuel Proß"
      />
    </motion.div>
  );
}

export default ProfilePhoto;
