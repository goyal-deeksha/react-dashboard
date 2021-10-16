import React from 'react';

import '../../css/dailyRptCard.css'

const DailyRptCard = () => {
    return (
        <div className={'daily__rpt__card'}>
            <div className={'daily__rpt__card__body'}>
            <div className={'chart'}>
                    Chart
            </div>
            <div className={'heading'}>
                <p>Daily Sales</p>
            </div>
            <div className={'heading__value'}>
                <p>sales value</p>
            </div>
            </div>
            <div className={'daily__rpt__card__footer'}>
                Footer Content
            </div>
        </div>
    )
}
export default DailyRptCard;