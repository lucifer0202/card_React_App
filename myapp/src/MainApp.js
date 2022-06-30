import React, { useState, useEffect } from 'react'
import Modal from './Modal'

export default function MainApp() {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowModal(true)
    }, [])

    const onCloseModal = () => {
        setShowModal(false)
    }
    const OpenModal = () => {
        setShowModal(true)
    }
    return (
        <div>
            {!showModal &&
                <button onClick={OpenModal}>Open modal</button>
            }
            {showModal &&
                <Modal onCloseModal={onCloseModal}/>
            }
        </div>
    )
}
