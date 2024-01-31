import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Movie() {
    const [show, setShow] = useState('');
    const params = useParams();

    console.log(params);
    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const response = await axios.get(`https://api.tvmaze.com/shows/${params.showId}`);
                setShow(response.data);
            } catch (error) {
                console.error('Error fetching show summary:', error);
            }
        };
        fetchSummary();
    }, [params.id]);
    return (
        <>
            <Navbar />
            <section className=" min-h-screen bg-black">
                <div className=" max-w-7xl mx-auto pt-8 text-white">
                    {/* <h1 className="text-5xl font-bold mb-4 text-center">Show Summary</h1> */}
                    {show && (
                        <div className=" p-4 rounded shadow flex flex-col md:flex-col xl:flex-row gap-4 bg-black items-center md:items-center xl:items-start">
                            <div className=" w-full md:w-2/5 xl:w-1/5 ">
                                {show.image.medium ?
                                    <img src={show.image.medium} alt={show.name} className="mb-2 rounded w-full" /> :
                                    <img src="https://picsum.photos/seed/picsum/500/320" alt={show.name} className="mb-2 rounded w-full" />
                                }
                            </div>
                            <div className="flex flex-col gap-4 w-full md:w-full xl:w-4/5">
                                <h2 className="text-4xl font-bold mb-2">{show.name}</h2>
                                <p className="text-xl">Genres: {show.genres.join(', ')}</p>
                                <p className="text-xl">Premiere Date: {show.premiered}</p>
                                <p className="text-xl">Rating: {show.rating.average || 'N/A'}</p>
                                <div className="text-xl" dangerouslySetInnerHTML={{ __html: show.summary }} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
