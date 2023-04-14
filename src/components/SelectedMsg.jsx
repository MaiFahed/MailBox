import React from 'react'
import { FiTrash2 } from "react-icons/fi";

const SelectedMsg = ({name, brief, message, date}) => {
    return (
        <div className='msgContainer'>
            <div className='msgHeader'>
                <div className='praghHead'>
                    <p id='pHeader'>{name}</p>
                    <p id='pHeader'> <span>{brief}</span> </p>
                </div>
                <div className='icon'>
                    <p><FiTrash2 color='black' size={25} /></p>
                    <span>{date}</span>
                </div>
            </div>

            <div className='msgFooter'>
                {message}
                {/* This is my first attempt at using React.
                Duis cursus, diam at pretium aliquet,
                metus urna convallis erat, eget tincidunt dui
                augue eu tellus. Phasellus elit pede, malesuada vel,
                venenatis vel, faucibus id, libero. Donec consectetuer
                mauris id sapien. Cras */}
            </div>
        </div>
    );
}

export default SelectedMsg