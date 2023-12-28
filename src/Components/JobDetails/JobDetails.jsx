import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams(); 
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    console.log(job);
    return (
        <div>
            <h2 className="text-center">All details here {id}</h2>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="job-details border md:col-span-3">
                    <h2>Job Description: A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h2>
                </div>
                <div className="apply-job border">
                    <h2>Job details</h2>
                </div>
            </div>

        </div>
    );
};

export default JobDetails;