import imageUrl from "@/assets/images/profile_image.png";
import Socials from "@/components/ui/socials";

function Profile() {
  return (
    <article className="flex flex-col items-center">
      <img
        className="w-[300px] mb-5 mix-blend-lighten"
        src={imageUrl}
        alt="A photo of myself"
      />
      <h2 className="h4 text-center">Frontend Developer</h2>
      <h1 className="h1 text-center">
        Hallo ich bin <span className="text-tokyo-green">Manuel Proß</span>
      </h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius dicta
        exercitationem, dolorum temporibus, enim magni, adipisci quia
        necessitatibus magnam alias quod? Quas amet maxime at numquam vitae
        ratione, alias voluptatibus.
      </p>
      <Socials />
    </article>
  );
}

export default Profile;
