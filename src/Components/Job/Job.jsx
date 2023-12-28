import { IoLocationOutline } from "react-icons/io5";
import { PiCurrencyCircleDollar } from "react-icons/pi"
import { Link } from "react-router-dom";


const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl my-10">
        <figure><img className="content-start" src={logo} alt="Shoes" /></figure>
        <div className="card-body text-left">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            
            <div><button className="text-m border border-[#7E90FE] rounded font-extrabold px-5 py-2 ">{remote_or_onsite}</button><button className="text-m border border-[#7E90FE] rounded m-2 font-extrabold px-5 py-2">{job_type}</button></div>
            <div className="flex">
                <h2 className="flex mr-4"><IoLocationOutline className="text-2xl" /> {location}</h2> 
                <h2 className="flex"><PiCurrencyCircleDollar className="text-2xl" />Salary : {salary} </h2>
                
            </div>
            <div className="card-actions ">
            <Link to={`/job/${id}`}>
                <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500">View Details</button>
            </Link>
            </div>
        </div>
        </div>
    );
};

export default Job;