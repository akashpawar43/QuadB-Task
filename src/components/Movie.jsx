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
                    <h1 className="text-4xl font-bold mb-4 text-center">Show Summary</h1>
                    {show && (
                        <div className=" p-4 rounded shadow flex flex-col md:flex-row gap-4 bg-black ">
                            {show.image ?
                                <img src={show.image.medium} alt={show.name} className="mb-2 rounded w-full" /> :
                                <img src="https://picsum.photos/seed/picsum/500/320" alt={show.name} className="mb-2 rounded w-full" />
                            }
                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl font-bold mb-2">{show.name}</h2>
                                <p>Genres: {show.genres.join(', ')}</p>
                                <p>Premiere Date: {show.premiered}</p>
                                <p>Rating: {show.rating.average || 'N/A'}</p>
                                <div dangerouslySetInnerHTML={{ __html: show.summary }} />
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
