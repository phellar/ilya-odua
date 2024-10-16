import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters
import supabase from '../Config/SupabaseClient';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import './MembersList.css'

const MembersList = () => {
    const { kegYear } = useParams(); // Get the kegYear from the URL
    const [members, setMembers] = useState([]);
    const [fetchError, setFetchError] = useState(null);

    useEffect(() => {
        const fetchMembers = async () => {
            const { data, error } = await supabase
                .from('cheif')
                .select('*') 
                .eq('kegyear', kegYear);
            
            if (error) {
                setFetchError('Unable to fetch members');
                console.log(error);
                setMembers([]);
            }
            if (data) {
                console.log(data);
                setMembers(data);
                setFetchError(null);
            }
        };

        fetchMembers();
    }, [kegYear]); // Fetch members when kegYear changes

    return (
        <>
            <Header />
            <section className='member-list-section'>
                <div className="container">
                    <div className="heading-new">
                    <h1> <span className='highlight'> Ilya Odua </span> {kegYear} kegite Year Members</h1>
                        
                     </div>
                    
                    
                    <div className="card-group-new">
                        {members.length > 0 ? (
                            members.map((member, index) => (
                                <div  className='lord-card'>
                                    <div className="lord-img">
                                        <img src={member.picture} className='-image' alt="" />
                                    </div>

                                    <div className="card-desc">
                                        <h2 className='highlight-new' id='chief-name'>{member.FullName}</h2>
                                         <h3>AB {member.portfolio}</h3>
                                     </div>
                                    <h3></h3>
                                </div>
                            ))
                        ) : (
                            <p>No members found for this keg year.</p>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default MembersList;
