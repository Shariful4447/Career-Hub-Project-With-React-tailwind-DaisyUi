import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localStorage";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); 
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    console.log(job);

    const handleAppliedJob =() =>{
        saveJobApplication(idInt);
        toast("Applied Successfully");
    } 
    return (
        <div>
            <h2 className="text-center">Job Details Of :  {job.job_title}</h2>

            <div className="grid gap-4 md:grid-cols-4 my-4">
                <div className="job-details border md:col-span-3">
                    <h2 className="my-2"><span className="text-xl">Job Description : </span>{job.job_description}</h2>
                    <h2 className="my-2"><span className="text-xl">Job Responsibility : </span>{job.job_responsibility}</h2>
                    <h2 className="text-xl my-2">Educational Requirements:</h2>
                    <p>{job.educational_requirements}</p>
                    <h2 className="text-xl my-2">Experiences:</h2>
                    <p>{job.experiences}</p>

                </div>
                <div className="apply-job border p-4">
                    <div className="bg-gradient-to-r from-sky-200 to-indigo-200">
                        

                        <div className="m-2">
                            <h2>Job details</h2>
                            <h2>Salary : {job.salary}</h2>
                            <h2>Job Title : {job.job_title} </h2>
                        </div>
                        <div className="p-2">
                            <h2>Contact Information</h2>
                            <h2>Phone : {job.contact_information.phone} </h2>
                            <h2>Email : {job.contact_information.email}</h2>
                            <h2>Address : {job.contact_information.address}</h2>
                        </div>
                    </div>
                    <div  className="border-dotted border-2"></div>
                    <div>
                        <button onClick={handleAppliedJob} className="btn btn-primary my-14">Apply Now</button>
                    </div>

                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default JobDetails;