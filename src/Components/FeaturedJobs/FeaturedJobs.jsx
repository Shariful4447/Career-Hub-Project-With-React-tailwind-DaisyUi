import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    // for showing only four data on this page
    const [dataLength, setDataLength] = useState(4); 
    useEffect( () =>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data =>setJobs(data))
    }, [])
    return (
        <div>
            <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-6"> 
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

            <div>
                <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-2">Show More</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;