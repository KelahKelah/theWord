import React from 'react'
import {Button, Input } from '../'
import './sidebar.css'

const Sidebar = () => {
    return(
        <aside className="sb-wrapper">
            <div className="sb-row">
                <div className='sb-search-wrapper'>
                   <Input 
                        className="search-input"
                        type="search"
                        placeholder="Search"
                        id=""
                        // onChange=""
                   />
               </div>
               <div className='sb-catergory-wrapper'>
                   <h3>Categories</h3>
                   <ul className='sb-category'>
                       <li>Bible Verses (12)</li>
                       <li>Questions (26)</li>
                       <li>Devotional (31)</li>
                   </ul>
               </div>
               <div className='sb-recommended-wrapper'>
                   <h3>Recently viewed</h3>
                   <div className='sb-recommended-content'>
                       <div className='sb-row-recommended'>
                            <Button className='sb-recommended-button'
                                buttonName="Trust" 
                            />
                        
                            <Button className='sb-recommended-button'
                                buttonName="Fasting" 
                            />
                            <Button className='sb-recommended-button'
                                buttonName="Revelation day" 
                            />
                        
                            <Button className='sb-recommended-button'
                                buttonName="Trust" 
                            />

                            <Button className='sb-recommended-button'
                                buttonName="Enemy" 
                            />
                       </div>
                   </div>
               </div>
               {/* <div className='sb-recently-viewed-wrapper'>
                <h3>Recommended articles</h3>
               </div> */}
            </div>
        </aside>   
    )
}
export {Sidebar}