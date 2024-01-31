import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from './Navbar';
import { Link } from "react-router-dom";

export default function Home() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        const handleData = async () => {
            try {
                const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
                setShows(response.data);
            } catch (error) {
                console.error('Error fetching shows:', error);
            }
        }
        handleData();
    }, [])

    // console.log(shows);

    return (
        <>
            <Navbar />
            <section className='w-full min-h-screen bg-black'>
                <div className=' container mx-auto p-6'>
                    <h2 className='p-3 mb-5 text-white text-center font-bold text-2xl' >Movies Section</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {shows.map((show) => (
                            <div key={show.show.id} className="text-white p-4 rounded shadow">
                                <div>
                                    {show.show.image ?
                                        <img src={show.show.image.medium} alt={show.show.name} className="mb-2 rounded w-full" /> :
                                        <img src="https://picsum.photos/seed/picsum/215/300" alt={show.show.name} className="mb-2 rounded w-full" />
                                    }
                                </div>
                                <h2 className="text-xl font-bold mb-2">{show.show.name}</h2>
                                <p>{show.show.network ? `Network: ${show.show.network.name}` : 'Network: N/A'}</p>
                                <p>{show.show.premiered ? `Premiere Date: ${show.show.premiered}` : 'Premiere Date: N/A'}</p>
                                <Link to={`/summary/${show.show.id}`}>
                                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                                        View Summary
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section >
        </>
    )
}
