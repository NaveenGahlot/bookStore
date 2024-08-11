import React from "react";
import banner from "../../public/Banner.jpg"

export default function Banner() {
return (
    <>
    <div className="max-w-screen-2xl container md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-10 md:mt-32">
        <div className="space-y-10">
            <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
            veniam nam illo. Animi dolores pariatur ipsum recusandae deserunt.
            Rem qui fuga rerum. Ullam soluta, Earum minus culpa molestias
            atque in architecto blanditiis nulla?
            </p>
        <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="bookStore@gmail.com" />
        </label>
        </div>
        <button className="btn mt-6 btn-secondary">Submit</button>
        </div>
        <div className="order-1 w-full md:w-1/2">
        <img src={banner} className="w-92 h-92" alt="" />
        </div>
    </div>
    </>
);
}
