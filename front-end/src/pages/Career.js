import React from 'react';
import Auth from '../components/Auth'
import {Link} from 'react-router-dom'


function Career () {



    
    return (
        <Auth>
            
            <div className="Career">
            
                <h1 className='careerH1'>Choose Your Career</h1>
                
                <div className="careerButtons">
                <Link to='./Software'>Go to chat</Link>   
                <button>Software Engineer</button>
                </div>
                <div className="careerButtons">
                <br />
                <button>UI/UX</button>
                </div>
                <br />
                <div className="careerButtons">
                <button>Data Analyst</button>
                </div>
                <br />
                <div className="careerButtons">
                <Link to='./chat'>Go to chat</Link>
                </div>
            </div>
        </Auth>
  )}

  export default Career








