import React from 'react'
import './Dates.css'

function Dates() {
  return (
    
    <div className='main_dates'>
          <div className='imp_dates_heading'>
                <h1 className='dates_heading'>Important Dates</h1>
                <hr></hr>
          </div>
      
          <div className='dates_container'>
              <div className='dates'>
                <h3>Paper Submission Closes On: </h3><br></br><p>12-12-2024</p>
              </div>
              <div className='dates2'>
                <h3>Notification of Acceptance of Paper: </h3><br></br><p>08-01-2025</p>
              </div>
              <div className='dates'>
                <h3>Final Manuscripts Submission:  </h3><br></br><p>24-01-2025</p>
              </div>
              <div className='dates2'>
                <h3>Early Bird/Author Registration:  </h3><br></br><p>03-02-2025</p>
              </div>      
          </div>
          <br></br>
          <br></br>
     </div>
     
      
  )
}

export default Dates