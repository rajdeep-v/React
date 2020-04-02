import React from 'react';

//car
//UI
//start/stop btn
//accelerate btn
//decelerate btn
//status
//id
//remove btn
//carlist


class Car extends React.component{
    render(){
        return (
            <div className="car">
             <span>CarId:</span>
             <button className="default-btn">Start</button>
             <button className="default-btn">Accelerate</button>
             <button className="default-btn">Decelerate</button>
             <span>Status:</span>
             <button className="default-btn">Remove</button>
            </div>    
            );
    }
}


export{Car};