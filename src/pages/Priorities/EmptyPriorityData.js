import React, { useState } from 'react'
import EditAddPriorityModal from '../CommonComponent/PriorityModal/EditAddPriorityModal';
import CopyPriorityModal from '../CommonComponent/CopyPriorityModal';


function EmptyPriorityData() {
    // Add Edit Priority Modal start
    const [showEditAddPriorityModal, setShowEditAddPriorityModal] = useState(false);
    const handleCloseEditAddPriorityModal = () => setShowEditAddPriorityModal(false);
    const handleShowEditAddPriorityModal = () => setShowEditAddPriorityModal(true);
    // Copy Priority Modal start
    const [showCopyPriorityModal, setShowCopyPriorityModal] = useState(false);
    const handleCloseCopyPriorityModal = () => setShowCopyPriorityModal(false);
    const handleShowCopyPriorityModal = () => setShowCopyPriorityModal(true);

    return (
        <>
            {/* for Empty Data */}
            <div className='row'>
                <div className='col-12'>
                    <div className='card bg-primary-grey-light-1'>
                        <div className='card-body text-center'>
                            <div className='mb-3'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    version="1.1"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width={100}
                                    height={100}
                                    x={0}
                                    y={0}
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: "new 0 0 512 512" }}
                                    xmlSpace="preserve"
                                    className=""
                                >
                                    <g>
                                        <linearGradient
                                            id="a"
                                            x1="164.85"
                                            x2="97.42"
                                            y1={415}
                                            y2="347.57"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset={0} stopColor="#fe7838" />
                                            <stop offset=".54" stopColor="#fe7636" />
                                            <stop offset={1} stopColor="#ffad8a" />
                                        </linearGradient>
                                        <linearGradient
                                            id="b"
                                            x1="389.98"
                                            x2="212.92"
                                            y1="299.5"
                                            y2="122.44"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset={0} stopColor="#6f2efe" />
                                            <stop offset=".52" stopColor="#6f2efe" />
                                            <stop offset={1} stopColor="#ae90ff" />
                                        </linearGradient>
                                        <g data-name="Layer 12">
                                            <path
                                                fill="#f2eeff"
                                                d="M496.52 129.86C483.09 80.38 431.63 28.92 382.15 15.49 351.82 7.92 311.17.13 256 0c-55.16.14-95.81 7.92-126.14 15.49C80.38 28.93 28.92 80.38 15.49 129.86 7.92 160.19.14 200.84 0 256c.14 55.17 7.92 95.82 15.49 126.15 13.43 49.48 64.89 100.93 114.37 114.37 30.33 7.57 71 15.35 126.14 15.49 55.17-.14 95.82-7.92 126.15-15.49 49.48-13.44 100.94-64.89 114.37-114.37 7.57-30.33 15.35-71 15.49-126.15-.14-55.16-7.92-95.81-15.49-126.14z"
                                                opacity={1}
                                                data-original="#f2eeff"
                                                className=""
                                            />
                                            <path
                                                fill="url(#a)"
                                                d="M174.29 405.56a47.68 47.68 0 0 0-67.43-67.43c-13.27 13.26-18.49 33.81-20.15 52.43a166.88 166.88 0 0 0 .18 31.65 3.89 3.89 0 0 0 3.26 3.31h.12c1.07 0 16.31.35 21-14.49a30.26 30.26 0 0 1 3.68-7.83 5.15 5.15 0 0 1 9.37 3.62 25.27 25.27 0 0 0 3.32 16.29 3.17 3.17 0 0 0 3.2 1.52c15.93-2.43 32.27-7.89 43.45-19.07z"
                                                opacity={1}
                                                data-original="url(#a)"
                                            />
                                            <path
                                                fill="url(#b)"
                                                d="M425.64 116.16c-1-16.56-12.82-28.39-29.37-29.38-56.27-3.35-118.91 20.49-167.78 69.37l-13 13q-7 7-13.39 14.45H161a25.51 25.51 0 0 0-20.8 12.75L116 244.71a25 25 0 0 0-1.35 5.37 11.89 11.89 0 0 0 11.75 11.75H157c-4 13.33-1.32 26.44 7.15 34.91l51.58 51.58c8.47 8.47 21.58 11.11 34.91 7.15V386a11.89 11.89 0 0 0 11.75 11.75 25.57 25.57 0 0 0 5.37-1.34L316 372.26a25.54 25.54 0 0 0 12.75-20.81v-41.09q7.42-6.36 14.49-13.36l13-13c48.91-48.94 72.76-111.61 69.4-167.84zM369.35 212a48.73 48.73 0 1 1 0-68.91 48.72 48.72 0 0 1 0 68.91z"
                                                opacity={1}
                                                data-original="url(#b)"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h5>Get ready to achieve your goals.</h5>
                            <p className='text-muted mb-2 f-s-16'>Focus your team around the most important initiatives this period.</p>
                            <p className='text-muted f-s-16'>
                                <em>
                                    Don't know where to start? Read here for <span className='text-primary fw-medium'>tips on how to pick the right priorities for your business</span>.
                                </em>
                            </p>
                            <div className='d-flex flex-wrap gap-2 justify-content-center'>
                                <button type="button" className="btn btn-primary" onClick={handleShowEditAddPriorityModal}>
                                    <i className="fi fi-br-plus me-2"></i>Add Priority
                                </button>
                                <button type="button" className="btn btn-outline-primary" onClick={handleShowCopyPriorityModal}>
                                    <i className="fi fi-br-copy me-2"></i>Copy Previous Priorities
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* for Empty Data */}

            {/* Add Priority Modal */}
            <EditAddPriorityModal
                show={showEditAddPriorityModal}
                handleClose={handleCloseEditAddPriorityModal}
            />
             {/* Add Priority Modal end */}
             {/* Copy Priorities Modal start*/}
            <CopyPriorityModal
                show={showCopyPriorityModal}
                handleClose={handleCloseCopyPriorityModal}
            />
            {/* Copy Priorities Modal end*/}
        </>
    )
}

export default EmptyPriorityData