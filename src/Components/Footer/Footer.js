import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className="foo">
           <div className="foott">
               <div className="container">
                   <div className="row">
                       <div className="col md-4">
                           <h2>contact with us</h2>
                           <h4>parment address:</h4>
                           <h6>gulshan ,dhaka</h6>
                           <p>01853037540</p>
                       </div>
                       <div className="fooicon col md-4">
                           <h2>please connet with us</h2>
                           <i class="fab fa-facebook-square fa-3x"></i>
                           <i class="fab fa-twitter-square fa-3x"></i>
                           <i class="fab fa-instagram-square fa-3x"></i>

                       </div>
                       <div className="col md-4">
                           <h3>top service</h3>
                           <h5>medicine delivery</h5>
                           <h5>food delivery</h5>
                           <h5>motor parts delivery</h5>
                           <h5>garments item delivery</h5>
                           
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Footer
