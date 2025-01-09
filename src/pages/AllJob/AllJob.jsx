import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import HotJobCard from '../Home/HotJobCard';
import { BiSearch } from 'react-icons/bi';

const AllJob = () => {
    const [sort, setSort] = useState(false);
    const [search, setSearch] = useState("");
    const { jobs, loading } = useJobs(sort, search);
    console.log(sort);
    if (loading) {
        return <span className='loading loading-spinner loading-lg'></span>
    }
    return (
        <div>
            <h1 className='py-5 text-4xl text-center font-bold'>All Jobs</h1>
            <div className='w-11/12 mx-auto bg-base-200 py-5 p-3 flex items-center gap-5'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && 'btn-success'}`}>{sort === true ? 'Sorted By Salary' : 'Sort By Salary'}</button>
                <BiSearch className='w-7 h-7'></BiSearch>
                <input onKeyUp={(e) => setSearch(e.target.value)} type="text" className='input w-full max-w-2xl' name="" placeholder='Search Jobs By Location' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    jobs.map(job => <HotJobCard key={job._id} job={job}></HotJobCard>)
                }
            </div>
        </div>
    );
};

export default AllJob;