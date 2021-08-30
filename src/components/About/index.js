import React from 'react'
import '../../styles/About.css'
import Face from '../../images/face.png';

export default function About() {
    // console.log(Face)
    return (
        <div className="photoTable">
            <div className="phCont">
                <img src="https://justinx255.github.io/mypersonalsitehtml/circle-cropped.png" alt='new' className='image' />

            </div>
            <div className="info">
                <div className='name'>
                    Sudharshan
                </div>
                <div className='be'>
                    ECE Graduate
                </div>
                <div className='wd'>
                    I'm an <strong>ECE Graduate</strong> and I'm Highly Interested in <strong><em>Web Development</em></strong>

                </div>
            </div>
        </div>

    )
}
