import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className="flex items-center justify-center bg-black text-white p-4 bottom-0 w-full gap-4 text-lg">
        meetmepatel 
        <a href="https://github.com/meetmepatel" className="inline-block text-lg">
          <FaGithub />
        </a>
      </div>
    </div>
  );
};

export { Footer };
