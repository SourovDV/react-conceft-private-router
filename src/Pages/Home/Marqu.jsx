import Marquee from "react-fast-marquee";

const Marqu = () => {
    return (
        <div className="flex ">
            <button className="btn btn-secondary">Login</button>
            <Marquee pauseOnHover={true}>
                <p className="text-xl font-semibold">hare krishno hare krishno krishno krishno hare hare hare ramo  hare ramo ramo ramo hare hare</p>
             </Marquee>
        </div>
    );
};

export default Marqu;