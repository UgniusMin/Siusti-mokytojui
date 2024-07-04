import React, { useEffect, useState } from 'react';
import { db, collection, getDocs, doc, deleteDoc } from './../firebase';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Modal from './../components/Formatting';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCog } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function MainPage() {

    const navigate = useNavigate();

    const buttonNavigateToImgForm = (e) => {
        e.preventDefault();
        navigate('/imgForm')
    };

    const [images, setImages] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFormat, setSelectedFormat] = useState('1fr 1fr');

    useEffect(() => {
        const fetchImages = async () => {
            const querySnapshot = await getDocs(collection(db, "images"));
            const imagesList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setImages(imagesList);
        };

        fetchImages();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, "images", id));
            setImages(images.filter(image => image.id !== id));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    };

    const handleFormatSelect = (format) => {
        setSelectedFormat(format);
        setIsModalOpen(false);
    };

    return (
        <>
            <Header />
            <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
                <FontAwesomeIcon icon={faCog} />
            </button>
            <div className="image-gallery" style={{ display: 'grid', gridTemplateColumns: selectedFormat }}>
                {images.map((image, index) => (
                    <div key={index} className="image-item">
                        <img src={image.url} alt={`img-${index}`} />
                        <button onClick={() => handleDelete(image.id)} className="delete-button">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                ))}
            </div>
            <div>
                <button className="div__addButton--primary" onClick={buttonNavigateToImgForm}>+</button>
            </div>
            <Footer />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSelectFormat={handleFormatSelect}
            />
        </>
    );
}

export default MainPage;