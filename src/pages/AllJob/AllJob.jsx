import React from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';

const AllJob = () => {
    const { jobs, loading } = useJobs();
    if(loading) {
        return <span className='loading loading-spinner loading-lg'></span>
    }
    return (
        <div>
            <h1 className='py-5 text-4xl text-center font-bold'>All Jobs</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;