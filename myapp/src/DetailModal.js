import React, { useState, useEffect } from 'react'
import './DetailModal.css'

export default function DetailModal() {
    const [value, setValue] = useState("")
    const [captionChecked, setCaptainChecked] = useState(false)
    const [viceCaptainChecked, setViceCaptainChecked] = useState(false)
    const [items, setItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    const onChange = (e) => {
        setValue(e.target.value)

    }
    const handleCaptain = (e) => {
        setCaptainChecked(e.target.checked)
    }
    const handleViceCaptain = (e) => {
        setViceCaptainChecked(e.target.checked)
    }
    const handleSubmitForm = () => {
        setItems({ value })
    }
    return (
        <div>
            <div classNameName='container'>
                <h2>User Details</h2>
                <div className="container">
                    <form action="/action_page.php">
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">First name:</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="name" onChange={onChange} placeholder="Your name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="lname">Select Category:</label>
                            </div>
                            <div className="col-75">
                                <select id="country" name="category" onChange={value} value={value}>
                                    <option value="Batsman">Batsman</option>
                                    <option value="Bowler">Bowler</option>
                                    <option value="All-Rounder">All-Rounder</option>
                                    <option value="Wicket-Keeper">Wicket Keeper</option>
                                </select>                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="country">Captain:</label>
                            </div>
                            <div className="col-75">
                                <input
                                    style={{ width: "20px", height: "20px" }}
                                    type="checkbox"
                                    checked={captionChecked}
                                    onChange={handleCaptain} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="country">Vice Captain::</label>
                            </div>
                            <div className="col-75">
                                <input
                                    style={{ width: "20px", height: "20px" }}
                                    type="checkbox"
                                    checked={viceCaptainChecked}
                                    onChange={handleViceCaptain} />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <input type="submit" value="Submit" onClick={handleSubmitForm} />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

