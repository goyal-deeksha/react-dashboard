import React, { useState } from 'react';

import '../../css/dashboard.css';

// icons
import { ProjectOutlined } from '@ant-design/icons';

// components
import Toolbar from './toolbar';
import Sidebar from '../sidebar';
import Card from '../Widgets/card';
import WeeklySummary from './weeklySummary';
import DailyRptCard from '../Widgets/DailyRptCard';

const Dashboard = () => {
    const [ fullDrawerOpen, setFullDrawerOpen ] = useState(true);

    const toggleSidebar = () => {
        setFullDrawerOpen(!fullDrawerOpen);
    }

    return(
        <main className={'dashboard'}>
            <div className={`layout ${fullDrawerOpen ? '' : 'drag'}`}>
                <Toolbar toggleSidebar={toggleSidebar} />
                <div className={'quick-rpt'}>
                    <Card icon={<ProjectOutlined />} value={'ss'} footer={'Footer content'} heading={'Revenue'} />
                    <Card icon={<ProjectOutlined />} value={'ss'} footer={'Footer content'} heading={'Revenue'} />
                    <Card icon={<ProjectOutlined />} value={'ss'} footer={'Footer content'} heading={'Revenue'} />
                    <Card icon={<ProjectOutlined />} value={'ss'} footer={'Footer content'} heading={'Revenue'} />
                </div>
                <div className={'weekly__Rpt'}>
                    <WeeklySummary />
                </div>
                <div className={'daily__Rpt'}>
                    <DailyRptCard />
                    <DailyRptCard />
                    <DailyRptCard />
                </div>
                <div className={'footer'}>
                    &copy; 2021 DeepMinds Pvt. Ltd.
                </div>
            </div>
            <Sidebar showFull={fullDrawerOpen} />
        </main>
    );
}
export default Dashboard;