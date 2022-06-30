import React from "react";
import Card from "./Card";
import './Modal.css'

export default function Modal({ onCloseModal }) {


    return (
        <div className="modal">
            <div
                className="is-thin"
            >
                <div className="modal-background" onClick={onCloseModal}></div>
                <div className="modal-content" id="modal-content">
                    <button onClick={onCloseModal}>Close modal</button>
                    <Card onCloseModal={onCloseModal} />

                </div>
                <div
                    className="modal-close is-large"
                    aria-label="close"
                    onClick={onCloseModal}
                ></div>
            </div>
        </div>
    );
}