import React from 'react'
import { Link } from 'react-router-dom'

const SupportTicket = () => {
    return (
        <>
            <div className='p-4'>
                <div className='card'>
                    <div className='curve_top  '>
                        <div className=' flex-shrink-0'>
                            <h2 className='top_text'>Hi!</h2>
                            <p className='text-white fw-medium'>How can we help?</p>
                        </div>
                        <div className=' info_card'>
                            <h5 className='f-s-25 text-black'>Get Live Help</h5>
                            <p className='mb-2 fw-semibold '>
                                <Link to='mailto:support@growthh.in' className='d-flex align-items-center'><i class="fi fi-br-envelope me-2 text-muted d-flex"></i> support@growthh.in</Link>
                            </p>
                            <p className='mb-2 fw-semibold '>
                                <Link to='tel:9667503347' className='d-flex align-items-center'><i class="fi fi-br-phone-call me-2 text-muted d-flex"></i> +91 96675 03347/</Link>
                            </p>
                            <p className='mb-0 fw-semibold '>
                                <Link to='https://www.growthh.in/' className='d-flex align-items-center'
                                ><i class="fi fi-br-site-alt me-2 text-muted d-flex"></i>https://www.growthh.in/</Link>
                            </p>
                        </div>
                    </div>

                    <div className='card-body'>
                        <div className='card sub_card'>
                            <div className='card-body'>
                                <form>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Company Name</label>
                                                <input type="text" className="form-control" placeholder="Company Name" value='Sandbox Company for Subhadeep Subhadeep' />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Email<span>*</span></label>
                                                <input type="email" className="form-control" placeholder="Email" value='subhadeep6270@gmail.com' />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Phone</label>
                                                <input type="number" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Subject<span>*</span></label>
                                                <input type="number" className="form-control" placeholder="" />
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <div className="form-group">
                                                <label className="form-label">Description<span>*</span></label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Notes"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className='col-12'>
                                            <p className='text-muted mb-0 f-s-14 fw-semibold'>WARNING: Any unsaved work on this page may be lost when submitting a ticket.</p>
                                        </div>
                                        <div className='col-12'>
                                        <div className='d-flex justify-content-start align-items-center gap-2 flex-wrap mt-4'>
                                            <button className="btn btn-secondary">
                                                Cancel
                                            </button>
                                            <button className="btn btn-exp-green">
                                                Submit
                                            </button>
                                        </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SupportTicket