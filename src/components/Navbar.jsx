import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="bg-slate-800 text-white h-20 flex items-center">
      <div className="wrapper-container" onClick={()=> navigate('/')}>
        <div className="flex items-center gap-q">
          <LogoIcon />
          <p className='text-3xl text-slate-200'>NotFTX</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
