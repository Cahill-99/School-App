import React from 'react';

function Navmenu(){


    return(
        <div className='navmenu-background'>

            <div className='welcome-block'>

            </div>
            <div className='task-button'>
                <img src= {process.env.PUBLIC_URL +'/Icons/check-mark-svgrepo-com'}></img>
                <h4>Tasks</h4>
            </div>
            <div className='inbox-button'>
                <h4>Inbox</h4>
            </div>
            <div className='notif-button'>
                <h4>Notifications</h4>
            </div>
            <div className='marks-button'>
                <h4>Marks</h4>
            </div>
            <div className='settings-button'>
                <h4>Settings</h4>
            </div>
        </div>
    )
}

export default Navmenu;