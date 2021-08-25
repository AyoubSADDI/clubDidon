import React from 'react'

import { Bar , Line } from 'react-chartjs-2';

const data ={
    labels: ["Red","Blue","Green","Violet","Yellow","Orange"],
    datasets : [
        {
         label:"couleur pref en france",
         data:["23","21","32","12","15","9"],
         backgroundColor: ["Red","Blue","Green","Violet","Yellow","Orange"],
        },

    ],
}
const options ={
     maintainAspectRatio:false
}


const Chart = () => {
    return (
        <div className="pb-5">
           
            <div className='container '>
    
              
               
                <div className='card'><Bar data={data} options={options}/> </div>
            </div>
            
        </div>
    )
}

export default Chart
