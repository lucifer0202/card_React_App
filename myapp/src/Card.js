import React, { useState } from 'react'
import RCBLogo from "../src/images/rcb.png"
import MILogo from "../src/images/mi.png"
import KKRLogo from "../src/images/kkr.jpg"
import RRLogo from "../src/images/rr.png"
import CSKLogo from "../src/images/csk.jpg"
import './Card.css'
import DetailModal from './DetailModal'


export default function Card() {
    const logos = [
        { name: RCBLogo, label: "RCB" },
        { name: MILogo, label: "MI" },
        { name: KKRLogo, label: "KKR", },
        { name: RRLogo, label: "RR", },
        { name: CSKLogo, label: "CSK" }
    ]
    const [checked, setChecked] = useState(false)
    const [askUserDetail, setAskUserDetail] = useState(false)
    // const [value, setValue] = useState("")

    const handleChange = (e) => {
        if (e.target.checked) {
            setAskUserDetail(true)
        }
        else {
            setAskUserDetail(false)

        }
        setChecked(!checked);
    };
    return (
        <div>
            <div style={{ display: 'flex' }}>
                {logos.map((logo, index) =>
                    <div className="flip-card" style={{ padding: "10px" }} key={index}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className='img_1' src={logo.name} alt="Avatar" />
                            </div>
                            <div className="flip-card-back">
                                <h5>{logo.label}</h5>
                                <p>Select {logo.label}
                                    <input
                                        style={{ width: "20px", height: "20px" }}
                                        type="checkbox"
                                        checked={checked}
                                        value={logo.label}
                                        onChange={handleChange} />
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {askUserDetail &&
                <div style={{display: askUserDetail ? 'block' : 'none' }}>
                    <DetailModal handleChange={handleChange} />
                </div>
            }
        </div>
    )
}
