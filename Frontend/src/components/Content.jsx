import React from "react";

export default function Content() {
return (
    <>
    <div className='max-w-screen-2xl container md:px-20 px-4 mt-[200px]  item-center justify-center text-center'> 
    <label className="input input-bordered flex items-center gap-2">
        Name
        <input type="text" className="grow" placeholder="Full-Name" />
    </label> <br />
    <label className="input input-bordered flex items-center gap-2">
        Email
        <input type="text" className="grow" placeholder="bookStore@gmail.com" />
    </label> <br />
    <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Enter your BuckChodi" /> 
    </label> <br /> 
    <button className="btn mt-6 btn-secondary">Submit</button>
    </div>
    </>
);
}
