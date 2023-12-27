

const Job = ({job}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img className="content-start" src={logo} alt="Shoes" /></figure>
        <div className="card-body text-left">
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            
            <div><button className="text-m border border-[#7E90FE] rounded font-extrabold px-5 py-2 ">{remote_or_onsite}</button><button className="text-m border border-[#7E90FE] rounded m-2 font-extrabold px-5 py-2">{job_type}</button></div>
            <div>
                <p>Location: {location} <span className="m-2">Salary: {salary}</span></p> 
                
            </div>
            <div className="card-actions ">
            <button className="btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500">View Details</button>
            </div>
        </div>
        </div>
    );
};

export default Job;