import React from 'react';

import '../../css/weeklySummary.css';

// icons
import { ProjectOutlined } from '@ant-design/icons';

const WeeklySummary = () => {
    return (
        <div className={'summary__card'}>
            <div className={'summary__card__body'}>
                <div className={'card__table__header'}>
                    <div className={'table__icon'}>
                        <ProjectOutlined />
                    </div>
                    <span className={'table__header__text'}><p>Updates by Projects</p></span>
                </div>
                <div className={'card__table'}>
                    <table className={'table__body'}>
                        {
                            [1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8].map (() => (
                                <tr>
                                    <td>Project name</td>
                                    <td>Hours</td>
                                    <td>Earning</td>
                                </tr>
                            ))
                        }
                    </table>
                </div>
                {/* <div>Table 2</div> */}
            </div>
        </div>
    )
}
export default WeeklySummary;