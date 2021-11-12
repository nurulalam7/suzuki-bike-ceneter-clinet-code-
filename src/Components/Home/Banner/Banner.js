import React from 'react'
import bann from '../../../image/banner.jfif'
import './Banner.css'

const Banner = () => {
    return (
        <div className='baninfo'>
            <div className="container">

              
                <div className="row">
                    <div className="col-md-6">
                        <h1>we are ready for giving modern motor bike </h1>
                    </div>
                    <div className="col-md-6">
                        <img src={bann} alt="" />
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default Banner
