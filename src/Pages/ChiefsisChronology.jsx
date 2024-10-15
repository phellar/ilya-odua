import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ChiefsisChronology.css'
import supabase from '../Config/SupabaseClient'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Card from '../Component/Card'

const ChiefsisChronology = () => {

    const [fetchError, setFetchError] = useState(null);
    const [chiefs,setChiefs]=useState(null)

    useEffect(()=>{
        const fetchCheifs = async ()=>{
            const {data,error} = await supabase
            .from('cheif')
            .select('*')
            if(error){
                setFetchError('Unable to fetch chief data')
                setChiefs(null)
                console.log(error)
            }

            if(data){
                console.log(data)
                setChiefs(data)
                setFetchError(null)
            }
               
        }

        fetchCheifs()
    },[])



  return (
    <>
    <Header/>
    <section className='chief-section'>
            <div className="container">
                <div className="headdd">
                 <h1 className='hhhhhhhh'><span className='highlight'>Ilya Odua</span> Members</h1>
                <p>our member</p>
             </div>
            {fetchError && (<p className='error'>{fetchError}</p>)}
                {chiefs && (
                    
                    <div className="card-groups">
                                {chiefs.map(chief => (
                                    <>
                                    <div className='card' style={{cursor: 'pointer'}}>
                                    <Link to={`/member/${chief.id}`}>
                                        <div className="image">
                                            <img src={chief.picture} alt='image'/> 
                                            
                                        </div>
                                        <div className="card-desc">
                                            <h3 className='highlight-new' id='chief-name' >{chief.FullName}</h3>
                                            {/* <h4>{chief.email}</h4>
                                            <p>Keg Year : {chief.kegyear}</p> */}
                                        </div>
                                    </Link>
                                    </div>
                                    </>
                                ))}
                        
                    </div>
                )}
            </div>

    </section>
    <Footer/>
    </>
  )
}

export default ChiefsisChronology