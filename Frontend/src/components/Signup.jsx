import React from "react";
import Login from "./Login";
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function Signup() {
    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) =>  {
        const userInfo = {
            fullName: data.fullName,
            email: data.email,
            password: data.password,
        } 

        await axios.post("http://localhost:8080/user/signup", userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                alert("Singup Successfully")
            }
        }).catch((err)=>{
            console.log(err.response?.data || err.message);
            alert(`Error: ${err.response?.data?.message || err.message}`);
        })
    };
return (
    <>
    <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
        <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                <a href="/">✕</a>
            </button>
            <h3 className="font-bold text-lg">Signup!</h3>
            {/* Name  */}
            <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input {...register("fullName", { required: true })}
                type="fullName"
                name="fullName"
                id="fullName"
                placeholder="Enter your full-name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                /> <br />
                {errors.fullName && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Email  */}
            <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                /> <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password  */} 
            <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                /> <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Button  */}
            <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
            </button>
            <p>
                Login now{" "}
                <span className="underline text-blue-500 cursor-pointer"
                onClick={()=> document.getElementById("my_modal_3").showModal()}>
                    Login
                </span>
            <Login />
            </p>
            </div>
            </form>
        </div>
        </div>
    </div>
    </>
);
}

