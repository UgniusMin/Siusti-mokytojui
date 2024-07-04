import React, { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { db, collection, addDoc } from './../firebase';

function ImgForm() {
    const [imgUrl, setImgUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "images"), { url: imgUrl });
            navigate('/mainPage');
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <>
            <Header />
            <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Place image</h5>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="url" 
                                    placeholder="Enter image URL" 
                                    value={imgUrl} 
                                    onChange={(e) => setImgUrl(e.target.value)} 
                                    required 
                                />
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Prideti</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ImgForm;
