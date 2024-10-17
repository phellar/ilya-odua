import React, { useState } from 'react'
import { FaPlus, FaMinus} from "react-icons/fa";
import './FAQ.css'

const FAQ = () => {

    const [isToggled1, setIsToggled1] = useState(false);
    const [isToggled2, setIsToggled2] = useState(false);
    const [isToggled3, setIsToggled3] = useState(false);
    const [isToggled4, setIsToggled4] = useState(false);
    const [isToggled5, setIsToggled5] = useState(false);
    const [isToggled6, setIsToggled6] = useState(false);
    const [isToggled7, setIsToggled7] = useState(false);
    const [isToggled8, setIsToggled8] = useState(false);
    const [isToggled9, setIsToggled9] = useState(false);
    const [isToggled10, setIsToggled10] = useState(false);

    const handleToggle1 = ()=>{
        setIsToggled1(!isToggled1);
    }
    const handleToggle2 = ()=>{
        setIsToggled2(!isToggled2);
    }
    const handleToggle3 = ()=>{
        setIsToggled3(!isToggled3);
    }
    const handleToggle4 = ()=>{
        setIsToggled4(!isToggled4);
    }
    const handleToggle5 = ()=>{
        setIsToggled5(!isToggled5);
    }
    const handleToggle6 = ()=>{
        setIsToggled6(!isToggled6);
    }
    const handleToggle7 = ()=>{
        setIsToggled7(!isToggled7);
    }
    const handleToggle8 = ()=>{
        setIsToggled8(!isToggled8);
    }
    const handleToggle9 = ()=>{
        setIsToggled9(!isToggled9);
    }

    // setIsToggled2(!isToggled2);
    //     setIsToggled3(!isToggled3);
    //     setIsToggled4(!isToggled4);



  return (
    <section className='faq'>
        <div className="container">
            <h2 className='head'>Frequently Asked Questions</h2>
            <div className="question">
                <div className="fa">
                     <h3>Is kegites Membership only open to students ?</h3>
                     {isToggled1 ? <p><small>No. There are lots of non-student members of the club. However, application is 
                also vetted just like the student membership. Fellows (non-student members) must be respected member of the 
                community with positive impact..
                            </small></p> : <p></p>}
                </div>
                    {isToggled1 ? <p onClick={handleToggle1}><FaMinus /></p> : <p onClick={handleToggle1}><FaPlus /></p>}
            </div>
            <div className="question">
                    <div className="fa">
                        <h3> Are Kegites functions only done at night for secrecy?</h3>
                        {isToggled2 ? <p><small> No.  <br/> Day, time of kegites functions are dependent on the school calender with considerations for 
                members convenience. usually, weekends (Fridays or Saturdays) are more convenient to attend functions.
                while guest travel during the day and celebrate/reunite at night.
                                </small></p> : <p></p>}
                    </div>
                        {isToggled2 ? <p onClick={handleToggle2}><FaMinus /></p> : <p onClick={handleToggle2}><FaPlus /></p>}
                </div>
                 <div className="question">
                 <div className="fa">
                 <h3>Is Kegites a cultists club ?</h3>
                 {isToggled3 ? <p><small>No, it's a socio-cultural Club.
                  </small></p> : <p></p>}
                 </div>
                  {isToggled3 ? <p onClick={handleToggle3}><FaMinus /></p> : <p onClick={handleToggle3}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3>Can a Kegite member also join any other cultist group ? </h3>
                    {isToggled4 ? <p><small>No, you can only join kegites. 
                    </small></p> : <p></p>}
                    </div>
                 {isToggled4 ? <p onClick={handleToggle4}><FaMinus /></p> : <p onClick={handleToggle4}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3> Does Chief collect salary ? </h3>
                    {isToggled5 ? <p><small> No, Cheifesis spend their personal monies and voluntary donations/contrubutions to run the affairs of the club.
                    </small></p> : <p></p>}
                    </div>
                 {isToggled5 ? <p onClick={handleToggle5}><FaMinus /></p> : <p onClick={handleToggle5}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3> Do you pay to become a member ? </h3>
                    {isToggled6 ? <p><small> Yes, you will pay token fee to purchase the application form.
                    </small></p> : <p></p>}
                    </div>
                 {isToggled6 ? <p onClick={handleToggle6}><FaMinus /></p> : <p onClick={handleToggle6}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3> Can a member leave any of the original branch to another one ?</h3>
                    {isToggled7 ? <p><small>  Yes, you need to do transfer of kariability.
                    </small></p> : <p></p>}
                    </div>
                 {isToggled7 ? <p onClick={handleToggle7}><FaMinus /></p> : <p onClick={handleToggle7}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3> Does Members gets punished for commiting an offense ?</h3>
                    {isToggled8 ? <p><small> Yes, You get punished and it varies .
                    </small></p> : <p></p>}
                    </div>
                 {isToggled8 ? <p onClick={handleToggle8}><FaMinus /></p> : <p onClick={handleToggle8}><FaPlus /></p>}
                </div>

                <div className="question">
                    <div className="fa">
                    <h3>What are the different punishment available ? </h3>
                    {isToggled9 ? <p>
                        <small> Fine - this is usually placed of members with little offense and it ranges from small amount of money
                        like 200,500,1000-5000 or 5 litres of palm wine or more dependeing on the levels of the member.
                    </small>

                       <p>
                    <small>
                    Suspension - This means the member won't be allowed to communicate,interact with other members during 
                    suspension but can be present in anay gatthering to reflect his remorse for commiting the offence.
                    </small>

                    <p>
                        <small>
                        Dekegation - permanent expulsion from the club. Highest Punishment an offending member could get from the group
                        </small>
                    </p>
                       </p>
                    </p> : <p></p>}
                    </div>
                 {isToggled9 ? <p onClick={handleToggle9}><FaMinus /></p> : <p onClick={handleToggle9}><FaPlus /></p>}
                </div>
                            
            





        </div>
    </section>
  )
}

export default FAQ