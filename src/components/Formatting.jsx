import React from 'react';
import '../../src/index.css';

function Modal({ isOpen, onClose, onSelectFormat }) {
    if (!isOpen) {
        return null;
    }

    const formats = [
        { id: 'format1', name: 'Format 1', gridTemplate: '1fr 1fr' },
        { id: 'format2', name: 'Format 2', gridTemplate: '2fr 1fr' },
        { id: 'format3', name: 'Format 3', gridTemplate: '1fr 2fr' },
        { id: 'format4', name: 'Format 4', gridTemplate: '1fr 1fr 1fr' },
    ];

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Format</h5>
                    <button onClick={onClose}>&times;</button>
                </div>
                <div className="modal-body">
                    {formats.map(format => (
                        <div key={format.id} onClick={() => onSelectFormat(format.gridTemplate)}>
                            <div className="format-option">
                                {format.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Modal;