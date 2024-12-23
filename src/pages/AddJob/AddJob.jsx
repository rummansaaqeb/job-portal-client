import React from 'react';

const AddJob = () => {

    const handleAddJob = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const initialData = Object.fromEntries(formData.entries());
        console.log(initialData);
        const { min, max, currency, ...newJob } = initialData;
        console.log(newJob);
        newJob.salaryRange = { min, max, currency };
        console.log(newJob);
    }

    return (
        <div>
            <h2 className="text-3xl">Post A New Job</h2>
            <form onSubmit={handleAddJob} className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* Job Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input type="text" name='location' placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick A Job Type</option>
                        <option>Full-time</option>
                        <option>Intern</option>
                        <option>Part-time</option>
                    </select>
                </div>
                {/* Job Category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Field</span>
                    </label>
                    <select className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Pick A Job Field</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Finance</option>
                        <option>Teaching</option>
                    </select>
                </div>
                {/* Salary Range */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input type="text" name='min' placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input type="text" name='max' placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <select name='currency' className="select select-ghost w-full max-w-xs">
                            <option disabled selected>Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>
                        </select>
                    </div>
                </div>
                {/* Job Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Job Description" name='description' required></textarea>
                </div>
                {/* Company Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input type="text" name='company' placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* Job Requirements */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Put each requirements in a new line" name='requirements' required></textarea>
                </div>
                {/* Responsibilities */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea className="textarea textarea-bordered" placeholder="Write each responsibilities in a new line" name='responsibilities' required></textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input type="text" name='hr_name' placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input type="email" name='hr_email' placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Logo URL</span>
                    </label>
                    <input type="text" name='company_logo' placeholder="Paste Company Logo URL" className="input input-bordered" required />
                </div>
                {/* Submit button */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;