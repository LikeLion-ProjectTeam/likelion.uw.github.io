import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import "./Gallery.css";

import dotty from "../Assets/Gallery/dotty.jpg";
import kickoff from "../Assets/Gallery/kickoff.jpg";
import likelionus from "../Assets/Gallery/LikeLionUS.jpeg";
import logo from "../Assets/Gallery/logo.jpeg";
import lion from "../Assets/Gallery/lion.jpeg";
import stadium from "../Assets/Gallery/stadium.jpg";

const images = [dotty, kickoff, likelionus, logo, lion, stadium];

Modal.setAppElement("#root");

const Gallery = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openModal = (image) => {
        setCurrentImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentImage(null);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gallery">
            <div className="gallery-content">
                <Fade cascade fraction={0.2} damping={0.2} delay={100}>
                    <h1>Gallery</h1>

                    <img
                        src={images[currentImageIndex]}
                        alt={`Gallery image ${currentImageIndex + 1}`}
                        className="slideshow-image"
                        onClick={() => openModal(images[currentImageIndex])}
                    />

                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Image Modal"
                        className="modal"
                        overlayClassName="overlay"
                    >
                        <button onClick={closeModal} className="close-button">
                            &times;
                        </button>
                        <button
                            onClick={() =>
                                setCurrentImage(
                                    images[
                                        (images.indexOf(currentImage) +
                                            images.length -
                                            1) %
                                            images.length
                                    ]
                                )
                            }
                            className="prev-button"
                        >
                            ‹
                        </button>
                        {currentImage && (
                            <img
                                src={currentImage}
                                alt="Enlarged view"
                                className="modal-image"
                            />
                        )}
                        <button
                            onClick={() =>
                                setCurrentImage(
                                    images[
                                        (images.indexOf(currentImage) + 1) %
                                            images.length
                                    ]
                                )
                            }
                            className="next-button"
                        >
                            ›
                        </button>
                    </Modal>
                    <Link to="/Gallery_List" className="gallery-button">
                        <span className="gallery-word">See more</span>
                    </Link>
                </Fade>
            </div>
        </div>
    );
};

export default Gallery;
