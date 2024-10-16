import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './ChiefsisChronology.css';
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const ChiefsisChronology = () => {
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1985 + 1 }, (_, index) => 1985 + index);

    const [fetchError, setFetchError] = useState(null);
    const [kegYears, setKegYears] = useState([]);

    useEffect(() => {
        const fetchKegYears = async () => {
            const { data, error } = await supabase
                .from('cheif')
                .select('kegyear')
            if (error) {
                setFetchError('Unable to fetch keg years');
                setKegYears([]);
                console.log(error);
            }
            if (data) {
                console.log(data);
                setKegYears(data.map(item => item.kegyear));
                setFetchError(null);
            }
        };

        fetchKegYears();
    }, []);

    return (
        <>
            <Header />
            <section className='chief-section'>
                <div className="container">
                    <div className="headdd">
                        <h1 className='hhhhhhhh'><span className='highlight'>Ilya Odua</span> Kegite Year</h1>
                        <p>Kindly click on kegyear to view members of the selected year</p>
                    </div>
                    {fetchError && (<p className='error'>{fetchError}</p>)}

                    <div className="keg-year-list">

                    {years.map((year) => (

                       
                        <div
                        
                         className="year-box"
                        style={{ cursor: 'pointer', }}
                    >
                        <ul className='year'>
                            <li>
                            <Link to={`/members/${year}`} className='highlight-new'>
                            {year} Keg Year
                        </Link>
                            </li>
                        </ul>
                       
                    </div>
                    
                    ))}

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ChiefsisChronology;
