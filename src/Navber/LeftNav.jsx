import { IoLogoFacebook, IoLogoGithub, IoLogoGoogle, IoLogoInstagram, IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router-dom";
import image1 from '../assets/qZone1.png'
import image2 from '../assets/qZone2.png'
import image3 from '../assets/qZone3.png'

const LeftNav = () => {
    return (
        <div className="p-3">
            <div>
                <h1 className="text-3xl font-bold">Login with</h1>
                <button className="btn mt-4 border-2 ">
                    <IoLogoGoogle></IoLogoGoogle>
                    <p> Login with Google</p>
                </button>
                <br />
                <button className="btn border mt-3">
                    <IoLogoGithub></IoLogoGithub>
                    <p> Login with Github</p>
                </button>
            </div>
            <div>
                <h1 className="text-3xl font-bold mt-9 ">Find Us On</h1>
                <Link className="flex items-center p-3 border-2 gap-2 mt-5" to='/facebook'> <IoLogoFacebook></IoLogoFacebook> FaceBook</Link>

                <Link className="flex items-center border-2 p-3 gap-2" to='/twitter'>  <IoLogoTwitter></IoLogoTwitter> FaceBook</Link>

                <Link className="flex items-center border-2 p-3 gap-2" to='/instragram'>  <IoLogoInstagram></IoLogoInstagram>FaceBook</Link>
            </div>
            <div className="bg-gray-300 p-3 mt-10">
                <p className="text-3xl font-bold mt-10">Q-Zone</p>
                <img src={image1} alt="" /><br />
                <img src={image2} alt="" /><br />
                <img src={image3} alt="" />
            </div>
            <div>
                <div className="card  bg-base-100 shadow-xl mt-9 p-3 image-full">
                     <img src={image2} alt="" />
                    <div className="card-body">
                        <h2 className="card-title">Create an Amazing Newspaper!</h2>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;