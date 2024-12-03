import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
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

    return (
        <div className="gallery">
            <h1>Gallery</h1>
            <p>동아리 사진들</p>
            <Masonry
                breakpointCols={3}
                className="gallery-grid"
                columnClassName="gallery-grid_column"
            >
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => openModal(image)}
                    >
                        <img src={image} alt={`Gallery item ${index + 1}`} />
                    </div>
                ))}
            </Masonry>

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
                {currentImage && (
                    <img
                        src={currentImage}
                        alt="Enlarged view"
                        className="modal-image"
                    />
                )}
            </Modal>

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
        </div>
    );
};

export default Gallery;
