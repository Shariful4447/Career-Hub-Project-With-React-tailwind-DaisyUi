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

            <div className="grid gap-4 md:grid-cols-4 my-4">
                <div className="job-details border md:col-span-3">
                    <h2 className="my-2"><span className="text-xl">Job Description : </span>A UI/UX (User Interface/User Experience) designer is responsible for designing and creating engaging and effective interfaces for software and web applications. This includes designing the layout, visual design, and interactivity of the user interface.</h2>
                    <h2 className="my-2"><span className="text-xl">Job Responsibility : </span>Collaborating with cross-functional teams: UI/UX designers often work closely with other teams, including product management, engineering, and marketing, to ensure that the user interface is aligned with business and technical requirements. You will need to be able to effectively communicate your design ideas and gather feedback from other team members.</h2>
                    <h2 className="text-xl my-2">Educational Requirements:</h2>
                    <p>Bachelor degree to complete any reputational university.</p>
                    <h2 className="text-xl my-2">Experiences:</h2>
                    <p>2-3 Years in this field.</p>

                </div>
                <div className="apply-job border p-4">
                    <div className="bg-gradient-to-r from-sky-200 to-indigo-200">
                        

                        <div className="m-2">
                            <h2>Job details</h2>
                            <h2>Salary</h2>
                            <h2>Job Title </h2>
                        </div>
                        <div className="p-2">
                            <h2>Contact Information</h2>
                            <h2>Phone : </h2>
                            <h2>Email :</h2>
                            <h2>Address :</h2>
                        </div>
                    </div>
                    <div  className="border-dotted border-2"></div>
                    <div>
                        <button className="btn btn-primary my-14">Apply Now</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default JobDetails;