import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import moment from "moment";

const RightNav = () => {
    const [catagory, setCatagory] = useState([])
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCatagory(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl">RightNav</h1>
            <div className="p-3">
                {
                    catagory.map(catagory => <div className="p-3 border-2 mt-2" key={catagory.id}>
                        <NavLink to={`/catagory/${catagory.id}`}>{catagory.name}</NavLink>
                    </div>)
                }
            </div>

            <div className="card p-3 bg-base-100 shadow-xl">
                <img src={image1} alt="" />
                <div >
                    <p className="my-5 text-xl font-bold"> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions flex justify-between ">
                        <path>Sport</path>
                        <p>{moment().format('MMMM Do , YYYY')}</p>
                    </div>
                </div>
            </div>
            <div className="card p-3 bg-base-100 shadow-xl mt-8">
                <img src={image2} alt="" />
                <div >
                    <p className="my-5 text-xl font-bold"> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions flex justify-between ">
                        <path>Sport</path>
                        <p>{moment().format('MMMM Do , YYYY')}</p>
                    </div>
                </div>
            </div>
            <div className="card p-3 bg-base-100 shadow-xl mt-8">
                <img src={image3} alt="" />
                <div >
                    <p className="my-5 text-xl font-bold"> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="card-actions flex justify-between ">
                        <path>Sport</path>
                        <p>{moment().format('MMMM Do , YYYY')}</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RightNav;