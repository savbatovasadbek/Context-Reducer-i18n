import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="">
      <div className="container">
        <div className="logo">
          <div className="">
            <img
              src="https://shoopy.b-cdn.net/48979/1682332630772_Logotheyellowkitchen1.jpeg?height=200"
              alt="Logo"
              loading="lazy"
            />
          </div>
          <div className="">
            <h2>The Yellow Kitchen</h2>
            <p>Freshness delivered to your door</p>
          </div>
        </div>
        <div className="search">
          <Label htmlFor="inputRequest">Picture</Label>
          <Input id="inputRequest" type="text" />
        </div>
        <div className="">
          <div className="">
            <AiOutlineHeart />
          </div>
          <div className="">
            <BiUserCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
