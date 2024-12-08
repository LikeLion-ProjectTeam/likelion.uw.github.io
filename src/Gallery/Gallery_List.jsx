import React, { useState } from "react";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import { Fade } from "react-awesome-reveal";
import "./Gallery_List.css";

import dotty from "../Assets/Gallery/dotty.jpg";
import kickoff from "../Assets/Gallery/kickoff.jpg";
import likelionus from "../Assets/Gallery/LikeLionUS.jpeg";
import logo from "../Assets/Gallery/logo.jpeg";
import lion from "../Assets/Gallery/lion.jpeg";
import stadium from "../Assets/Gallery/stadium.jpg";

const images = [dotty, kickoff, likelionus, logo, lion, stadium];

Modal.setAppElement("#root");

const Gallery_List = () => {
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
        <div className="gallery-list">
            <div className="gallery-list-content">
                <Fade cascade fraction={0.2} damping={0.2} delay={100}>
                    <h1>Gallery</h1>

                    <Masonry
                        breakpointCols={3}
                        className="gallery-list-grid"
                        columnClassName="gallery-list-grid_column"
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="gallery-list-item"
                                onClick={() => openModal(image)}
                            >
                                <img
                                    src={image}
                                    alt={`Gallery item ${index + 1}`}
                                />
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
                </Fade>
            </div>
        </div>
    );
};

export default Gallery_List;
