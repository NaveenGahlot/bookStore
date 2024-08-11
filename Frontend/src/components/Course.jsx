import React, { useEffect, useState } from 'react' 
import Cards from './Cards'
import axios from "axios"

export default function Course(){
    const [book, setBook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try{
                const res = await axios.get("http://localhost:8080/book");
                console.log(res.data);
                setBook(res.data);
            }catch(error){
                console.log(error)
            }
        };
        getBook();
    },[])
    return(
        <>
        <div className='max-w-screen-2xl container md:px-20 px-4'>
            <div className='mt-28 item-center justify-center text-center'>
                <h1 className='text-2xl md:text-4xl'>
                    We're delighted to have you <span className='text-pink-500'>Here!</span>
                </h1>
                <p className='mt-12'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde error excepturi exercitationem voluptatem amet quaerat commodi est distinctio quia blanditiis minima, quam odit ullam deserunt corrupti numquam non mollitia itaque incidunt delectus sapiente porro. Cupiditate tenetur quo, porro reprehenderit repellendus rerum dicta dolorum cumque ipsam maxime odit eos delectus quia at repudiandae eligendi aliquid, error recusandae.
                </p>
                <button className='bg-pink-500 text-white px-4 py-2 mt-6 rounded-md hover:bg-pink-700 duration-300'>
                    <a href="/">Back</a>
                </button>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    book.map((item) => (
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
        </>
    )
}