import React, { useEffect } from 'react'
import { useState } from 'react'
import './ChiefsisChronology.css'
import supabase from '../Config/SupabaseClient'
import Header from '../Component/Header'
import Card from '../Component/Card'

const ChiefsisChronology = () => {

    const [fetchError, setFetchError] = useState(null);
    const [chiefs,setChiefs]=useState(null)

    useEffect(()=>{
        const fetchCheifs = async ()=>{
            const {data,error} = await supabase
            .from('cheif')
            .select()
            if(error){
                setFetchError('Unable to fetch chief data')
                setChiefs(null)
                console.log(error)
            }

            if(data){
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
            {fetchError && (<p className='error'>{fetchError}</p>)}
            <div className="card-groups">
                {chiefs && (
                
                        <div className='chief-card'>
                            <div className="chief-info">
                                {chiefs.map(chief => (
                                    <>
                                    <div className="image">
                                        <img src={chief.picture} alt="chief image" className='chief-img' />
                                        {/* {chief.picture} */}
                                    </div>
                                    <div className="card-desc">
                                        <h3 className='highlight-new'>{chief.FullName}</h3>
                                        <p>{chief.email}</p>
                                        <p>Keg Year : {chief.kegyear}</p>
                                    </div>
                                    </>
                                ))}
                            </div>
                        </div>
                )}

            </div>
        </div>
    </section>
    </>
  )
}

export default ChiefsisChronology