import LeftNav from "../../Navber/LeftNav";
import Navber from "../../Navber/Navber";
import RightNav from "../../Navber/RightNav";
import Header from "../Header/Header";
import Marqu from "./Marqu";

 
const Home = () => {
    return (
        <div>
             <Header></Header>
             <Marqu></Marqu>
            <Navber></Navber>
           <div className="grid grid-cols-4 border gap-4">
           <div className=" col-span-1 border-2">
                <RightNav></RightNav>
             </div>
             <div className="col-span-2 border-2">
                <h3 className="text-3xl">midel classdfdsffs</h3>
             </div>
             <div className="col-span-1 border-2">
                <LeftNav></LeftNav>
             </div>
           </div>
        </div>
    );
};

export default Home;