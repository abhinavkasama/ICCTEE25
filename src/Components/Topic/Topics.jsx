import React from 'react'
import './Topics.css'

function Topics() {
  return (
    <div className='container'>
        <div className='topics_heading'>
                <h1 className='topics_heading'>Topics</h1>
                <hr></hr>
        </div>
      
          <div className='topics_container'>
              <div className='topics'>
                <h3>TRACK I: COMMUNICATION NETWORKS</h3><br></br>
                <ul>
                    <li>Wireless Communications</li>
                    <li>Mobile Ad-Hoc Networks</li>
                    <li>Software Defined Networks</li>
                    <li>Information Theory and Coding</li>
                    <li>Cloud Communications and Networking : Fog/Edge/Cloud</li>
                    <li>Wearable Network and Systems</li>
                    <li>Personal Communication Systems</li>
                    <li>Vehicular Networks and Applications</li>
                    <li>M2M and MTC Communications</li>
                    <li>Internet of Things</li>
                    <li>Architecture and protocols</li>
                    <li>Satellite Communication</li>
                    <li>Quantum Networking</li>
                    <li>Qos Provisioning and Architectures</li>
                    <li>Computer Security</li>
                    <li>Network Security</li>
                    <li>Cyber Security</li>
                </ul>
              </div>
              <br></br>
              <div className='topics2'>
                <h3>TRACK II: COMPUTATIONAL INTELLIGENCE</h3><br></br>
                    <ul>
                        <li>Big Data</li>
                        <li>Data Mining</li>
                        <li>Artificial Intelligence</li>
                        <li>Evolutionary algorithms</li>
                        <li>Swarm Intelligence</li>
                        <li>Fuzzy Sets and Vague Sets</li>
                        <li>Hybrid Computational Intelligence</li>
                        <li>Computer Vision</li>
                        <li>Soft Computing</li>
                        <li>Decision Support and Decision making</li>
                        <li>Image Processing</li>
                        <li>Gamification / Game Technologies</li>
                        <li>Digital Public and Policy Engagement Spaces</li>
                    </ul>
              </div>
              <br></br>
              <div className='topics'>
                    <h3>TRACK III: EMBEDDED SYSTEMS AND SMART APPLICATIONS</h3><br></br>
                        <ul>
                            <li>Industry 4.0</li>
                            <li>Robotics</li>
                            <li>Smart Cities</li>
                            <li>Smart Grid</li>
                            <li>Green Energy</li>
                            <li>Renewable Energy and Storage</li>
                            <li>Smart Healthcare</li>
                            <li>Smart Agriculture</li>
                        </ul>
              </div>
                  
          </div>

    </div>
  )
}

export default Topics