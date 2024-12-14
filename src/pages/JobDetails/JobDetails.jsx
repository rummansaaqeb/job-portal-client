import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { title, company, applicationDeadline} = useLoaderData();

    return (
        <div>
            <h2>job details for {title}</h2>
            <p>Apply For : {company}</p>
            <p>Deadline: {applicationDeadline}</p>
            <button className="btn btn-primary">Apply Now</button>
        </div>
    );
};

export default JobDetails;