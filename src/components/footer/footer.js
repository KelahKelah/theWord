import React from 'react'

const Footer = () => {
    return(
        <footer className="container-fluid footer-container">
            <div className="row footer-row py-5">
                <div className="col-8 bg-inf">
                    <form className="subscribe-form">
                        <label className="subscribe-label">Subscribe to newsletter</label>
                        <input className="subscribe-input py-2" placeholder="Enter your email"/>
                    </form>
                </div>
                <div className="col-4 mt-4">
                    <button className="subscribe-button">Subscribe</button>
                </div>
            </div>
        </footer>   
    )
}
export {Footer}