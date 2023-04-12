import React from 'react'
import { FiTrash2 } from "react-icons/fi";

const SelectedMsg = () => {
    return (
        <div className='msgContainer'>
            <div className='msgHeader'>
                <div className='praghHead'>
                    <p id='pHeader'>Playing with react.js</p>
                    <p id='pHeader'> <span>maximum</span> </p>
                </div>
                <div className='icon'>
                    <p><FiTrash2 color='black' size={25}/></p>
                    <span>3 days ago</span>
                </div>

            </div>

            <div className='msgFooter'>This is my first attempt at using React. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras</div>
        </div>
    );
}

export default SelectedMsg