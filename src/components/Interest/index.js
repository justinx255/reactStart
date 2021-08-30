import React from "react";
import "../../styles/Interest.css";
export default function index() {
    return (
        <div className="g">
            <div className="title">Area Of Interest</div>
            <div className="area">
                <ul className="intrest">
                    <li>Networking</li>
                    <li>Data Base Management System</li>
                    <li>Web Development</li>
                    <li>Learning New Technologies</li>
                </ul>
                <ul className="intrest">
                    <li>Electronics</li>
                    <li>Verilog/VHDL</li>
                    <li>VLSI</li>
                    <li>
                        My <strong>Super Power</strong> is
                        <strong>
                            <em className="maths">&nbsp;&nbsp; Mathematics</em>
                        </strong>
                    </li>
                </ul>
            </div>
            <hr className='hr1' />
        </div>
    );
}
