import { React, useState } from 'react';
import './Item.css';
import { MdThumbUpOffAlt, MdThumbUp } from 'react-icons/md';

function Item(props) {
    const [isLike, setLike] = useState(false);
    const handleLike = () => setLike(!isLike);
    return (
        <>
            <li className='specific__item'>
                <div className="specific__item__details">
                    <img class="item__img" src={props.hdurl} alt="" />
                    <div className="info">
                        <div className="item__explaination">
                            <p>{props.explanation}</p>
                        </div>
                        <div class="likeBtn" onClick={handleLike}>
                            {isLike && <MdThumbUp />}
                            {!isLike && <MdThumbUpOffAlt />}
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Item

