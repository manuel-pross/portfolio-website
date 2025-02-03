import { IconContext } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Profile() {
  return (
    <article className="flex flex-col">
      <img
        className="mb-4"
        src="./dist/assets/photo.jpg"
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
      <ul className="flex gap-3 justify-center">
        <IconContext.Provider
          value={{
            className: "w-8 h-8 text-tokyo-green",
          }}
        >
          <li>
            <a href="https://github.com/manuel-pross">
              <div className="border-2 border-tokyo-green rounded-full p-2">
                <FaGithub />
              </div>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/manuel-proß-a2059b2b7">
              <div className="border-2 border-tokyo-green rounded-full p-2">
                <FaLinkedinIn />
              </div>
            </a>
          </li>
        </IconContext.Provider>
      </ul>
    </article>
  );
}

export default Profile;
