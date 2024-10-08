import React, { useState } from 'react';
import AnnualInitiativeHeader from './AnnualInitiativeHeader';
import AnnualInitiativeFilter from './AnnualInitiativeFilter';
import ManageTeamModal from '../CommonComponent/ManageTeamModal';
import AnnualInitiativeDetailsModal from '../CommonComponent/AnnualInitiativeModal/AnnualInitiativeDetailsModal';
import AnnualInitiativesEmptyData from './AnnualInitiativesEmptyData';
import AnnualInitiativeCollapseCard from './AnnualInitiativeCollapseCard';
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import YearlyInitiativeCollapseCard from './YearlyInitiativeCollapseCard';

function AnnualInitiatives() {
    // Annual Initiative Search Filter visibility state
    const [isAnnualInitiativeFilterVisible, setIsAnnualInitiativeFilterVisible] = useState(false);
    const handleAnnualInitiativeFilter = () => {
        setIsAnnualInitiativeFilterVisible(!isAnnualInitiativeFilterVisible);
    };

    // Manage Team Modal state
    const [showManageTeamModal, setShowManageTeamModal] = useState(false);
    const handleCloseManageTeamModal = () => setShowManageTeamModal(false);
    const handleShowManageTeamModal = () => setShowManageTeamModal(true);

    // Annual Initiative Details Modal state
    const [showAnnualInitiativeDetailsModal, setShowAnnualInitiativeDetailsModal] = useState(false);
    const handleCloseAnnualInitiativeDetailsModal = () => setShowAnnualInitiativeDetailsModal(false);
    const handleShowAnnualInitiativeDetailsModal = () => setShowAnnualInitiativeDetailsModal(true);

     // Add Edit Priority Modal start
     const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
     const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
     const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);

    return (
        <>
            <div>
                {/* Header Component */}
                <AnnualInitiativeHeader 
                    handleAnnualInitiativeFilter={handleAnnualInitiativeFilter} 
                    handleShowManageTeamModal={handleShowManageTeamModal} 
                    handleShowAnnualInitiativeDetailsModal={handleShowAnnualInitiativeDetailsModal}
                />

                <div className='dashboard-cont-wrap p-4'>
                    {/* Empty Data Component */}
                    <AnnualInitiativesEmptyData handleShowAnnualInitiativeDetailsModal={handleShowAnnualInitiativeDetailsModal} />
                    
                    {/* Filter Component */}
                    {isAnnualInitiativeFilterVisible && <AnnualInitiativeFilter />}

                    <div className='row'>
                        <AnnualInitiativeCollapseCard handleShowEditAddPriorityModal={handleShowEditAddPriorityModal}/>
                        <YearlyInitiativeCollapseCard handleShowEditAddPriorityModal={handleShowEditAddPriorityModal}/>
                    </div>
                </div>
            </div>

            {/* Manage Team Modal */}
            <ManageTeamModal
                show={showManageTeamModal}
                handleClose={handleCloseManageTeamModal}
            />

            {/* Annual Initiative Details Modal */}
            <AnnualInitiativeDetailsModal
                showAnnualInitiativeDetailsModal={showAnnualInitiativeDetailsModal}
                handleCloseAnnualInitiativeDetailsModal={handleCloseAnnualInitiativeDetailsModal}
            />
            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
            {/* Add Priority Modal end */}
        </>
    );
}

export default AnnualInitiatives;
