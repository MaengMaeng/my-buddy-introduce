import React from 'react';
import Portal from './Portal'
import './Modal.css';

const Modal = ({ visible, title, children, onClose }) => {
    const close = (e) => {
        console.log('close');
        onClose(e);
    }

    return (
        <Portal elementId='modal-root'>
            <div className={'overlay' + (visible ? '' : ' hide')}></div>
            <div className={'modal' + (visible ? '' : ' hide')}>
                <div className='modal__title'>
                    {title}
                </div>
                <div className='modal__contents'>
                    {children}
                </div>

                <div className='modal__btn-cancle' onClick={close}>
                    취소
                </div>
            </div>
        </Portal>
    )
};

export default Modal;