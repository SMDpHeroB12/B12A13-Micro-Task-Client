import logo from "../assets/MicroTask.svg";
const Logo = () => {
  return (
    <div className="flex gap-2 items-center ">
      <img src={logo} alt="" className="w-10" />
      <h2>
        Micro<span className="text-secondary">Task</span>
      </h2>
    </div>
  );
};

export default Logo;
