import React from 'react';
import MainNav from './MainNav';

export default function Pricing () {
    return (
        <>
        <MainNav />
        <div className="container-fluid">
         <div>
          <h2 className="h2 text-center display-5 mt-5 p-2">Pricing Plans</h2>
         <p className="text-center">With our flexible pricing plans you can use Formidable however you like</p>
         </div>
         <div className="row">
           <div className="col-md-4 text-center p-3">
             <h2>Basic</h2>
             <ul className='list-unstyled'>
                <li>2 forms/day</li>
                <li>Basic fuctionalities</li>
             </ul>
             <button className="btn rounded text-white bg-dark p-3 w-100">Free</button>
           </div>
            <div className="col-md-4 text-center p-3">
             <h2>Pro</h2>
             <ul className="list-unstyled">
                <li>75 forms monthly</li>
                <li>Basic fuctionalities</li>
             </ul>
             <button className="btn rounded text-white bg-dark p-3 w-100">$5 monthly</button>
           </div>
               <div className='col-md-4 text-center p-3'>
             <h2>Pro Plus</h2>
             <ul className="list-unstyled">
                <li>75 forms monthly</li>
                <li>Basic fuctionalities & Data analysis features</li>
             </ul>
             <button className="btn rounded text-white bg-dark p-3 w-100">$75 monthly</button>
           </div>
           </div>
           </div>
           
          
        </>
    )
}