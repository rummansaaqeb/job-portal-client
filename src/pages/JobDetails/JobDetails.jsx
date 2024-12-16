import React from 'react';
import { CiMedal } from 'react-icons/ci';
import { FaCoffee, FaMoneyBill, FaUser } from 'react-icons/fa';
import { FaBuildingColumns, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineWatchLater } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {

    const { _id, title, company, applicationDeadline, company_logo, requirements, category, salaryRange, jobType, responsibilities, location } = useLoaderData();

    return (
        <div className='mt-24 mb-24'>
            <div className='container mx-auto'>
                <img className='w-20 mx-auto' src={company_logo} alt="" />
            </div>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-3xl mt-5'>{title}</h2>
                <Link to={`/jobApply/${_id}`}><button className='btn btn-primary font-bold text-lg btn-lg'>Apply Now</button></Link>
            </div>
            <div className='w-3/4 border rounded-xl p-4 mt-12'>
                <h3>Employment Information</h3>
                <div className="divider"></div>

                <div className='grid grid-cols-2 gap-12'>
                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaBuildingColumns className='w-6 h-6 mr-5' /> Industry</p>
                        <div>
                            {
                                requirements.map((skill, idx) => <p key={idx}>{skill}</p>)
                            }
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaUser className='w-6 h-6 mr-5' /> Job Level</p>
                        <div>
                            Experienced {category} Manager
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaMoneyBill className='w-6 h-6 mr-5' /> Salary</p>
                        <div>
                            ${salaryRange.min} - ${salaryRange.max}
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><CiMedal className='w-6 h-6 mr-5' /> Experience</p>
                        <div>
                            1-2 Years
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaCoffee className='w-6 h-6 mr-5' /> Job Type</p>
                        <div>
                            {jobType}
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><MdOutlineWatchLater className='w-6 h-6 mr-5' /> Deadline</p>
                        <div>
                            {applicationDeadline}
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaBuildingColumns className='w-6 h-6 mr-5' /> Responsibilities</p>
                        <div>
                            {
                                responsibilities.map((res, idx) => <p key={idx}>{res}</p>)
                            }
                        </div>
                    </div>

                    <div className='flex gap-12'>
                        <p className='flex items-centers'><FaLocationDot className='w-6 h-6 mr-5' /> Location</p>
                        <div>
                            {location}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;