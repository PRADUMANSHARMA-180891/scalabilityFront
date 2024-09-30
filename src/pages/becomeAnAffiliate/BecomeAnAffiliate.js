import React from 'react'
import { Link } from 'react-router-dom'

const BecomeAnAffiliate = () => {
    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        Promote Align and Earn: Become an Align Affiliate Today!
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <p class="text-muted mb-1 f-s-14 fw-medium">Join the Growthh Affiliate Program today and start earning while you spread the word about Growthh. By adding any of the badges or links provided below to your website, blog, newsletters, or emails, you can begin monetizing your efforts. These badges and links are uniquely coded to match your Growthh account credentials, ensuring seamless tracking.</p>
                                <p class="text-muted mb-1 f-s-14 fw-medium">When a company clicks on your exclusive affiliate link and subsequently subscribes to Growthh, you'll receive a 10% commission on all subscription fees paid during their first year! The best part? No additional effort is needed. Simply copy and paste the code below onto your platform of choice and start getting rewarded for sharing Growthh with others!</p>
                                <p class="text-muted mb-1 f-s-14 fw-medium">All payments are conveniently deposited monthly via PayPal to the email address associated with your Growthh account. You'll receive an email from PayPal containing instructions on how to access and transfer your earned funds.</p>
                                <p class="text-muted mb-1 f-s-14 fw-medium">For more details, feel free to reach out to us at <Link to="mailto:support@growthh.in">support@growthh.in</Link> Your success as an Growthh Affiliate awaits!</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <h6 class="mb-3">Growthh Badges</h6>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-title'>Large Banner</p>
                            </div>
                            <div className='card-body'>
                                <Link to='http://localhost:3000/assets/images/affiliate-img1.webp'>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/affiliate-img1.webp'} alt="affiliate-img2" className=" mb-4 affiliate_banner" />
                                </Link>

                                <p> <code className='text-muted mb-1 f-s-14 '>&lt;a to='http://localhost:3000/assets/images/affiliate-img1.webp'&gt;
                                    &lt;img src={process.env.PUBLIC_URL + '/assets/images/affiliate-img1.webp'} alt="affiliate-img2" className=" mb-4" /&gt;&lt;/a&gt;</code></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <h6 class="mb-3">Small Banner</h6>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-title'>Large Banner</p>
                            </div>
                            <div className='card-body'>
                                <Link to='http://localhost:3000/assets/images/affiliate-img1.webp'>
                                    <img src={process.env.PUBLIC_URL + '/assets/images/affiliate-img2.webp'} alt="affiliate-img2" className=" mb-4 affiliate_banner2" />
                                </Link>

                                <p><code className='text-muted mb-1 f-s-14 '>&lt;a to='http://localhost:3000/assets/images/affiliate-img1.webp'&gt;
                                    &lt;img src={process.env.PUBLIC_URL + '/assets/images/affiliate-img2.webp'} alt="affiliate-img2" className=" mb-4" /&gt;&lt;/a&gt;</code></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <h6 class="mb-3">Text Link</h6>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-title'>Text Link</p>
                            </div>
                            <div className='card-body'>
                            <p class="text-muted mb-1 f-s-14 fw-medium">
                             <Link to="https://www.growthh.in/" className='fw-semibold text-decoration-underline'>It's time to Growthh</Link> </p>
                                   <div>
                                        <small class="text-muted mb-1 f-s-14 mb-2 "><em><strong>Please Note: </strong></em> This link is not styled. It will inherit whatever styling you have on your blog or website.</small>
                                    </div>
                                    <code className='text-muted mb-1 f-s-14 '>&lt;a href='https://www.growthh.in/' target='_blank'&gt;It's time to Align&lt;/a&gt;</code>
                            </div>

                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <p className='card-title'>Plain Text</p>
                            </div>
                            <div className='card-body'>
                                        <p className='text-muted mb-1 f-s-14 mb-2'>https://www.growthh.in/</p>
                                        <code className='text-muted mb-1 f-s-14 '>https://www.growthh.in/</code>
                                   
                                   
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BecomeAnAffiliate