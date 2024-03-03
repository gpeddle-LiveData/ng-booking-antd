// src/components/RightSidebar.tsx

import React from 'react';

const RightSidebar: React.FC = () => {
    return (
        <div className="right-sidebar">
            <button className="action-button">Save</button>
            <button className="action-button">Revert</button>
            {/* State transition button */}
            <button className="state-button">Send to Requested</button>
        </div>
    );
};

export default RightSidebar;
