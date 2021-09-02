import React from 'react'
import '../../styles/Education.css'


export default function Education() {
    const data = [
        { sno: 1, course: 'B.E(ECE)', university: 'KIT,CBE', board: 'Anna University', year: 2020, percentage: 70 },
        { sno: 2, course: 'HSC', university: 'GRD-CPF,CBE', board: 'State Board', year: 2016, percentage: 78 },
        { sno: 3, course: 'SSLC', university: 'GRD-CPF,CBE', board: 'State Board', year: 2014, percentage: 88 },
    ]
    return (
        <div className='home1'>
            <div className='title'>
                Education
            </div>
            <div className="table1 ">
                <div className="header">
                    <div className="body">S.No</div>
                    <div className="body">Course</div>
                    <div className="body">University</div>
                    <div className="body">Board/University</div>
                    <div className="body">Year</div>

                    <div className="body">%</div>
                </div>
                <div className="body">
                    {data.map((d) =>
                        <div className="c" >
                            <div className="body">{d.sno}</div>
                            <div className="body">{d.course}</div>
                            <div className="body">{d.university}</div>
                            <div className="body board">{d.board}</div>
                            <div className="body">{d.year}</div>
                            <div className="body">{d.percentage}</div>

                        </div>
                    )}
                </div>
            </div>
            <hr className='hr2' />

        </div >
    )
}
