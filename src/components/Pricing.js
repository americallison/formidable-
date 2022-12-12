import React from 'react';
import MainNav from './MainNav';

export default function Pricing () {
    return (
        <>
        <MainNav />
           <div>
             <h2>Pricing Plans</h2>
             <p>With our flexible pricing plans you can use Formidable however you like</p>
           </div>
           <div>
             <h2>Basic</h2>
             <ul>
                <li>2 forms/day</li>
                <li>Basic fuctionalities</li>
             </ul>
             <button>Free</button>
           </div>
           <div>
             <h2>Pro</h2>
             <ul>
                <li>75 forms monthly</li>
                <li>Basic fuctionalities</li>
             </ul>
             <button>$5 monthly</button>
           </div>
            <div>
             <h2>Pro Plus</h2>
             <ul>
                <li>75 forms monthly</li>
                <li>Basic fuctionalities</li>
                <li>Data analysis features</li>
             </ul>
             <button>$75 monthly</button>
           </div>
             
          
        </>
    )
}