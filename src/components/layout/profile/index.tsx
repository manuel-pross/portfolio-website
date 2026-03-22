import ProfilePhoto from "@/components/ui/profilePhoto";
import Socials from "@/components/ui/socials";

function Profile() {
  return (
    <article className="flex flex-col items-center xl:items-start gap-6 xl:gap-0 xl:flex-row xl:justify-between">
      <div className="order-2 xl:order-1 xl:w-[550px] 2xl:w-[750px]">
        <h2 className="h4 text-center xl:text-left mb-2">Frontend Developer</h2>
        <h1 className="h1 text-center xl:text-left">
          Hallo ich bin <span className="text-tokyo-green">Manuel Proß</span>
        </h1>
        <p className="text-center xl:text-left"></p>
        <Socials />
      </div>

      <ProfilePhoto />
    </article>
  );
}

export default Profile;
