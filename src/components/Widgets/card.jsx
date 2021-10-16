import React from 'react';

import '../../css/card.css';

const Card = (props) => {
    const { icon, value, footer, heading } = props;
    return (
        <div className={'card'}>
            <div className={'card__body'}>
                <div className={'card__icon'}>
                    {icon}
                </div>
                <div className={'card__content'}>
                    <p>{heading}</p>
                    <p>{value}</p>
                </div>
            </div>
            <div className={'card__footer'}>
                {footer}
            </div>
        </div>
    )
}
export default Card;