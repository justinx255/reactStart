import React from 'react';
import '../../styles/Skills.css'
import ProgressBar from './progressBar';

export default function Skills() {
    const testData = [
        { name:"HTML",bgcolor: "#DD4B25", completed: 99 },
        { name:"CSS",bgcolor: "#2862E9", completed: 80 },
        { name:"JS",bgcolor: "#EFD81D", completed: 70 },
    
        { name:"BootStrap",bgcolor: "#7710F1", completed: 80 },
        { name:"ReactJS",bgcolor: "#45C9F7", completed: 70 },
        { name:"RestAPI",bgcolor: "#72A660", completed: 60 },
    ];

    return (
        <div className="skils">
            <div className='title'>
                Skills
            </div>
            <div className='bars'>

                {testData.map((item, idx) => (
                    <div>
                        <div className='bar_text'>
                            {item.name}
                        </div>
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                    </div>
                ))}

            </div>
            <hr className='hr3'/>
        </div>
    )
}
