import imageUrl from "@/assets/images/profile_image_circular.png";

function ProfilePhoto() {
  return (
    <>
      <img
        className="w-[298px] h-auto xl:w-[498px] my-0 mx-auto"
        src={imageUrl}
        alt="A personal photo of Manuel Proß"
      />
    </>
  );
}

export default ProfilePhoto;
