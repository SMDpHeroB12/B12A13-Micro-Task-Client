import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="footer flex justify-between p-6  text-base-content container mx-auto">
        <div>
          <h2 className="font-bold text-lg">MicroTask Platform</h2>
          <p>Complete tasks. Earn rewards.</p>
        </div>

        <div className="flex gap-4 text-2xl">
          <a href="https://github.com/your-profile" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
