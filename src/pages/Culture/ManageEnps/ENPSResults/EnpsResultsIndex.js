import React, { useContext, useRef, useState } from 'react'
import { Dropdown, Modal, OverlayTrigger, Popover, Tab, Tabs } from 'react-bootstrap';
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReOpenSurveyConfirmationModal from './ReOpenSurveyConfirmationModal';
import CloseSurveyConfirmationModal from './CloseEnpsSurveyConfirmationModal';
import DeleteModal from '../../../CommonComponent/DeleteModal';
import GeneralComments from './GeneralComments';
import CloseEnpsSurveyConfirmationModal from './CloseEnpsSurveyConfirmationModal';

function EnpsResultsIndex() {
    // ReOpen Survey Confirmation Modal start
    const [showReOpenSurveyConfirmationModal, setShowReOpenSurveyConfirmationModal] = useState(false);
    const handleCloseReOpenSurveyConfirmationModal = () => setShowReOpenSurveyConfirmationModal(false);
    const handleShowReOpenSurveyConfirmationModal = () => setShowReOpenSurveyConfirmationModal(true);
    // Close Survey Confirmation Modal start
    const [showCloseSurveyConfirmationModal, setShowCloseSurveyConfirmationModal] = useState(false);
    const handleCloseCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(false);
    const handleShowCloseSurveyConfirmationModal = () => setShowCloseSurveyConfirmationModal(true);
    //delete Modal
    const [deleteShow, setDeleteShow] = useState(false);
    const handleDeleteModalClose = () => setDeleteShow(false);
    const handleDeleteModalShow = () => setDeleteShow(true);
    const handleDelete = () => { setDeleteShow(true); }

    return (
        <>
            <div className="titleBar bg-white py-2 px-4 shadow">
                <div className="d-flex align-items-center flex-wrap">
                    <div className="pageTitle me-3 d-flex align-items-center">
                        eNPS Results
                        <OverlayTrigger
                            trigger="click"
                            rootClose
                            placement="auto"
                            overlay={
                                <Popover id="enps-survey" className="unique-outer-wrap">
                                    <div className="unique-outer-wrap">
                                        <h5>Employee Net Promoter Score (eNPS)</h5>
                                        <p>
                                            An <b>Employee Net Promoter Score (eNPS)</b> is a single question rated on a 1 - 10 scale. The question generally asks employees how likely they are to recommend your company as a place to work and provides a feedback box for additional information.
                                        </p>
                                        <p>
                                            The eNPS survey will be sent to all users in your account. An add-on feature is also available that allows you to send the survey to additional recipients that aren’t users, allowing you to get a more complete picture from your whole company. If you don’t currently have access to this add-on and are interested, contact your Align advisor for more information.
                                        </p>
                                        <p>
                                            You can preschedule a custom cadence for sending out the survey. Monthly or quarterly is recommended depending on the size of your organization. You can also manually send out a survey whenever and as often as you like.
                                        </p>
                                        <p>
                                            The scoring is as follows:
                                        </p>
                                        <ul>
                                            <li>9 - 10 = Promoter</li>
                                            <li>7 - 8 = Passive</li>
                                            <li>1 - 6 = Detractor</li>
                                        </ul>
                                        <p>
                                            The final eNPS score is calculated by: % Promoters - % Detractors. The eNPS survey question results are tracked over time and will show the historical trends on the Company Dashboard.
                                        </p>
                                    </div>
                                </Popover>
                            }
                        >
                            <span className="cursor-pointer ms-2 f-s-14">
                                <i className="fi fi-sr-question-square text-primary"></i>
                            </span>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
            <div className='enps-results-wrap p-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex flex-wrap mb-3'>
                            <Link to="/manage-enps" className='btn btn-outline-primary btn-sm'>
                                <i class="fi fi-br-angle-left me-2"></i>Back
                            </Link>
                            <div className='d-flex align-items-center ms-3'>
                                <Tooltip title="Print Survey">
                                    <button type="button" className="btn btn-outline-secondary btn-sm fit-button me-2" >
                                        <i className="fi fi-br-print"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Re-open Survey">
                                    <button type="button" className="btn btn-outline-success btn-sm fit-button me-2" onClick={handleShowReOpenSurveyConfirmationModal}>
                                        <i class="fi fi-br-arrow-up-right-from-square"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Close Survey" onClick={handleShowCloseSurveyConfirmationModal}>
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                        <i class="fi fi-br-circle-xmark"></i>
                                    </button>
                                </Tooltip>
                                <Tooltip title="Delete this Survey" onClick={handleDelete}>
                                    <button type="button" className="btn btn-outline-danger btn-sm fit-button me-2" >
                                        <i class="fi fi-br-trash"></i>
                                    </button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Survey Details</h5>
                            </div>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                eNPS Survey Date
                                            </label>
                                            <p className='mb-0'>7/1/2024</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Recipients
                                            </label>
                                            <p className='mb-0 d-flex align-items-center'><span className='square bg-success me-2'></span>3</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Responded
                                            </label>
                                            <p className='mb-0 d-flex align-items-center'>
                                                <span className='square bg-warning me-2'></span>0
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-8 col-sm-12 col-12'>
                                        <div className='card shadow-none border bg-gradient-top-1'>
                                            <div className='card-header'>
                                                <h5 className='card-title'>Company Wide Employee Net Promoter Score</h5>
                                            </div>
                                            <div className='card-body'>
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>
                                                                This Survey's eNPS
                                                            </label>
                                                            <p className='fs-2 fw-bold'>0</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>
                                                                Align eNPS Benchmark on eNPS Survey Date
                                                                <OverlayTrigger
                                                                    trigger="click"
                                                                    rootClose
                                                                    placement="auto"
                                                                    overlay={
                                                                        <Popover id="enps-survey" className="unique-outer-wrap">
                                                                            <div className="unique-outer-wrap">
                                                                                <h5>Employee Net Promoter Score (eNPS)</h5>
                                                                                <p>
                                                                                    The <b>Align eNPS Benchmark</b> is calculated from the latest eNPS Survey results for all Companies that have conducted at least one eNPS Survey in the past year from this Survey's date. For example, assuming this eNPS Survey was sent on February 21 this year, the Benchmark will look for the latest eNPS Surveys that were sent from February 21 last year through February 21 this year.
                                                                                </p>
                                                                                <p>
                                                                                    The eNPS formula begins with the percentage of Promoters within the Total Responses and subtracts the Percentage of Detractors within the Total Responses.
                                                                                </p>
                                                                                <p>
                                                                                    An eNPS value can range from 100, everyone is a Promoter, down to -100, everyone is a Detractor.
                                                                                </p>
                                                                                <p>
                                                                                    The scoring is as follows:
                                                                                </p>
                                                                                <ul>
                                                                                    <li>Promoters: 9, 10</li>
                                                                                    <li>Passives: 7, 8</li>
                                                                                    <li>Detractors: 1 through 6</li>
                                                                                    <li>Total Responses: Promoters + Passives + Detractors</li>
                                                                                </ul>
                                                                                <p>
                                                                                    Note: The eNPS Benchmark formula was updated in February 2021. Prior to this, the latest eNPS Survey results for any Company that had conducted at least one eNPS Survey were included in the eNPS Benchmark.
                                                                                </p>
                                                                            </div>
                                                                        </Popover>
                                                                    }
                                                                >
                                                                    <span className="cursor-pointer ms-2 f-s-14">
                                                                        <i className="fi fi-sr-question-square text-primary"></i>
                                                                    </span>
                                                                </OverlayTrigger>
                                                            </label>
                                                            <p className='fs-2 fw-bold text-success'>34</p>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='form-group'>
                                                            <label className='form-label'>
                                                                eNPS Formula
                                                            </label>
                                                            <p className='fw-bold'><span className='text-success'>0%</span> Promoters - <span className='text-danger'>0%</span> Detractors</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-md-4 col-sm-6 col-12'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Response Rate
                                            </label>
                                            <p className='mb-0 '>
                                                <img src="data:image/png;base64,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" alt='' />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body pb-1'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Detractors:
                                            </label>
                                            <p className='mb-0'>0</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Passives:
                                            </label>
                                            <p className='mb-0'>0</p>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group'>
                                            <label className='form-label'>
                                                Promoters:
                                            </label>
                                            <p className='mb-0'>0</p>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='form-group'>
                                            <p className='mb-1'>eNPS Score Distribution (hover over bars for score values)</p>
                                            <div className="progress" role="progressbar">
                                                <div className="progress-bar bg-danger" style={{ width: '100%' }} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>Users Surveyed</h5>
                            </div>
                            <div className='card-body'>
                                <div className='d-flex flex-wrap'>
                                    <div className='f-s-14 me-3 mb-2 fw-medium'>
                                        Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                    </div>
                                    <div className='f-s-14 me-3 mb-2 fw-medium'>
                                        Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                    </div>
                                    <div className='f-s-14 me-3 mb-2 fw-medium'>
                                        Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                    </div>
                                    <div className='f-s-14 me-3 mb-2 fw-medium'>
                                        Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                    </div>
                                    <div className='f-s-14 me-3 mb-2 fw-medium'>
                                        Subhadeep Chowdhury <a href='mailto:'>(subha@example.com)</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <img className='img-fluid' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABjcAAADGCAYAAACeoNK5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABpdSURBVHhe7d1/bNfl2S/wq6BYdWgRtYc9EIKiZzNwplDLpuiWZbofxu4RwzzTLbA4yDShuI1NFwuCoiZ7cKvUZAymk2w+7siGW9Udt+FxZ6nTYq1hbGgWT7vGFlJlFBWx7EF7vG++7RioLUKFr7xeyZ3P577vD6Z/2rx7XVdJz5sCAAAAAACgSAwpPAEAAAAAAIqCcAMAAAAAACgqwg0AAAAAAKCoCDcAAAAAAICiItwAAAAAAACKinADAAAAAAAoKsINAAAAAACgqAg3AAAAAACAoiLcAAAAAAAAisqAwo36+vqoqKjIq66urnC6S9r33qWVvh2o9vb2whsAAAAAAMA7680V+g03WltbY8OGDdHQ0JBXZ2dnX4DR3d2d98uXL4+mpqa8qqqq8t1AdHR0FN4AAAAAAADeWW+u0G+4MW7cuLjuuuuitLQ0r8rKymhra8t3Kdx45ZVXYsSIEXkPAAAAAAAw2PZp5kYKM9auXRtjx47N+66urmhpaYnp06fnllQ1NTX5GwAAAAAAgMEy4HCjubk5pk6dmvtZnX/++fkshRsjR46MNWvW5JZVyYoVK/ITAAAAAABgMJT0vKnwPiAp5Fi6dGnU1tZGWVlZ4XSXd7pLUjBizgYAAAAAAPBuTZkyZd/DjTRgfOHChXmleRy7S+HG6tWrc3uqNJ+jP42NjfmHAAAAAAAA6E9vrtBvW6oUWOw+S2P9+vUxZsyYGDVqVNTX10ddXV0+T/cp2EgDxwcSbAAAAAAAALwb/YYbkyZNyoFFmreRhoanAGPevHk5wKiqqsrfpPN0X15e3ncGAAAAAAAwGPa5LdWBpC0VAAAAAAAwUANuSwUAAAAAAHAoEW4AAAAAAABFRbgBAAAAAAAUFeEGAAAAAABQVIQbAAAAAABAURFuAAAAAAAARUW4AQAAAAAAFBXhBgAAAAAAUFSEGwAAAAAAQFERbgAAAAAAAEVFuAEAAAAAABQV4QYAAAAAAFBUhBsAAAAAAEBREW4AAAAAAABFRbgBAAAAAAAUlX0KN+rr66Ourq6w2yXtKyoq+lb6BgAAAAAAYLAMONxIocWNN95Y2O3S3d0dnZ2dsXz58mhqasqrqqqqcAsAAAAAAHDgDSjcSNUZa9eujXnz5hVOdknhxiuvvBIjRowonAAAAAAAAAyuAYUbc+bMicWLF8cxxxxTONmlq6srWlpaYvr06bklVU1NTQ48AAAAAAAABst+DRRP4cbIkSNjzZo10dDQkM9WrFiRnwAAAAAAAIOhpOdNhfd+pbkbbW1tuZLjrTQ3N8fSpUujtrY2ysrKCqf/1N7eHh0dHYUdAAAAAADAvpkyZcqBDzdWr16d21OVlpYWTt9eY2Nj/iEAAAAAAAD605sr7FdbqhR2pGHjSZq1kYKNysrKAQUbAAAAAAAA78Z+hRtVVVX5mYaJT506NcrLy/vOAAAAAAAABsM+taU60LSlAgAAAAAABuqAtKUCAAAAAAB4rwk3AAAAAACAoiLcAAAAAAAAiopwAwAAAAAAKCrCDQAAAAAAoKgINwAAAAAAgKIi3AAAAAAAAIqKcAMAAAAAACgqwg0AAAAAAKCoCDcAAAAAAICiItwAAAAAAACKinADAAAAAAAoKsINAAAAAACgqAg3AAAAAACAolLS86bC+3uusbGx8AYAAAAAANC/KVOm7H+40draGtXV1bFp06a8nzBhQtTW1kZZWVnev5MUbqQfAgAAAAAAoD+9ucJ+t6Xq6uqKj3zkI9HQ0BBNTU1x9913DyjYAAAAAAAAeDf2O9xob2+P8vLyKC0tLZwAAAAAAAAMnv0ON9ra2mLlypVRUVGRV3Nzc+EGAAAAAADgwNuvcKO7uzs6OztjwYIFuSXV8uXL44YbbshzOAAAAAAAAAbDPg0Ur6ury1UayYwZM2LOnDn5vVcKOxYvXhyVlZVRVVVVOP2n1MKqo6OjsAMAAAAAANg3aaD4PoUb/ekNN6ZNmxaTJk0qnL693qnmAAAAAAAA/enNFfarLdXWrVtj7ty5fW2oNmzYkKszTjnllLwHAAAAAAA40Pa7ciMFG9XV1bFp06YYNWpULF26NMaNG1e4fWcqNwAAAAAAgIHqzRUOaFuqfSXcAAAAAAAABuqAtKUCAAAAAAB4rwk3AACAg2bHjh3x8MMPx1133RUtLS2FUwAAgHcm3AAAAA6K7du3x5IlS2LLli1RXl4e1157baxfv75wCwAA8PaEGwAAwEHx+OOPx+mnnx6XX355XHTRRTFr1qxoaGgo3AIAALw94QYAAHBQvPDCC3H88ccXdhEnnnhi7Ny5s7ADAAB4e8INAADgoJg8eXK8+uqr8frrrxdOAAAABka4AQAAvCfSbI1777037rnnnti4cWNuSXXJJZfE0KFD831XV1eu3kg6Ozvj1ltvjRdffDHvAQAAdifcAAAABt3mzZvjtttui5EjR8aIESNi7ty5sXr16n+p2khVHMcee2y0tbXF/Pnz45xzzukLOwAAAHYn3AAAAAbdunXroqKiIi688ML43Oc+Fz/4wQ/i97//fTz00EPR09NT+Cri2WefjZtvvjmuuuqq+PjHPx4lJSWFGwAAgH8SbgAAAIMuVWukiozeSo1UkbFgwYJYs2ZNPPnkk/ksVW088cQTUV1dHWeddVY+AwAAeCvCDQAAYNCNHz8+nn/++XjqqacKJ7sCjquvvjruv//+2LZtW5x99tmxbNmymDBhQuELAACAtybcAAAABt1xxx0XV1xxRdTW1kZLS0vhNGLs2LExfPjwPDg8fXPyyScXbgAAAN6ecAMAAHhPpFZTc+bMiZqamvjTn/6UZ22kio3XXnstPvCBDxS+AgAA6J9wAwAAOGC2b98eL7/8crzxxhuFk11SkPHoo4/m9/nz58cdd9wRX/ziF+Mb3/hGXHrppXHSSSflOwAAgIEoefOXjJ7C+3uusbExpkyZUtgBAADFKg0Kv/vuu+PPf/5zHgy+efPm+Pa3vx2nnHJKDjoeeOCBeOSRR+L666+P8vLyHHakIKS0tDSGDh1a+K8AAAC8s95cYUCVG83NzVFRUdG30r5XfX39v9zV1dUVbgAAgMNF+gVjx44dsWTJkrjppptixowZuf1UCjva29tj/fr1sXDhwhxsJCUlJTkEEWwAAADvRr/hxtatW2P16tWxZs2aaGpqiuXLl8fSpUvzedLW1hYLFizId2mlHroAAMDh5bnnnovRo0fnsCIFF2eeeWacccYZOewYMmRIDjpOOOGEwtcAAAD7p99wo6ysLBYvXpyfSSorT1paWqK7uzs6OzvzLzEAAMDha/z48dHQ0JAHhCdp7kaao/GFL3whfv7zn+e2VQAAAAfKPg8U7+rqyv1xR4wYkcONVGI+e/bs3JJq5syZfRUdAADA+9eWLVvi3nvvjXvuuSc2btyYe96edtppUV1dHbfffnuet3HWWWfF1KlTc9Dx0ksvFf4lAADA/tuncCOFGXfeeWdceumlMW7cuL6gY9WqVbkl1eTJk3PZefoOAAB4f0rDwm+77bYYOXJk/qOnuXPnxq9+9av8x07z58+Pj33sY/Hd7343Kisr44gjjshDwwEAAA6kkp6UTuwmDQRfuXJlfk9DAHtnaKTAIrWnSgMA326uRmtrax4SmFYKP/aUqjw6OjoKOwAAoBg9/fTTsX379jj33HPzPlVl/PSnP41JkybFRz/60XyWZnCkgeHPPPNMvPHGG/GpT30qz+IAAADYX6lyfK9w462kVlPXXHNNTJs2Laqqqgqne0vhRm1tbSxatKhvRsc7aWxszD8EAABQPJqbm+MPf/hD/qOnNEA8SdUcN954Y3zpS1/KFd1//OMf4ze/+U2cf/758YlPfCKGDRuWvwMAANgfvblCv22pUsVGajX1VsFG+qWmpqamrw3Vgw8+mAcJDiTYAAAAilP6f/7nn38+nnrqqcJJxIknnhhXX3113H///fHaa6/Feeedlyu/L7zwQsEGAABwwPUbbmzatCnWrVuX/worDQ3vXSnYSGXnqY9uGhKYzjo7O2PWrFmFfwkAALwfHXfccXHFFVfkqu2WlpbCacTYsWNj+PDh8eKLLxZOAAAABseA2lINFm2pAACgOKVfI5544ok8s++6666LiRMn5tZUS5cujerq6jjppJMKXwIAABw4vbmCcAMAANhLGhL+97//PcaNG7fXIPD0K0QKMk444YT461//Gt///vfj5ZdfjiOPPDK++c1vxplnnln4EgAA4MAa8MwNAADg8NPa2hpf+9rX4sknnyyc7JKCjd/97ndx/fXXx8aNG+PDH/5w/PCHP4w777wz7r77bsEGAADwnhBuAAAAezn++OPjjDPOiGXLlsXTTz9dOI0cbPzyl7+Mm266KcaMGZPPUmXHscceG0OHDs17AACAwSbcAAAA9jJixIg49dRT46tf/Wqeq5EGh7/22mtx9tlnx3/8x39EeXl54UsAAID3nnADAADYy1FHHZWfEyZMyO2prr322rjyyiujra0tV2kAAAAcTMINAAA4zO3YsSMefvjhuOuuu3KFRnLEEUfEkCFDYtu2bXHyySfHMccck1tVjR49Ot8DAAAcTMINAAA4jG3fvj2WLFkSW7Zsya2mUoXG+vXr48gjj4yjjz461q5dG7fcckvMmzcvPvvZz8att94ar776auFfAwAAHBzCDQAA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" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header'>
                                <h5 className='card-title'>1. How happy are you at work?</h5>
                            </div>
                            <div className='card-body'>
                                <img className='img-fluid' src="data:image/png;base64,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" alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <GeneralComments/>
                    </div>
                </div>
            </div>
            {/* ReOpen Survey Confirmation Modal start*/}
            <ReOpenSurveyConfirmationModal
                show={showReOpenSurveyConfirmationModal}
                handleClose={handleCloseReOpenSurveyConfirmationModal}
            />
            {/* ReOpen Survey Confirmation Modal end*/}

            {/* Close Survey Confirmation Modal start*/}
            <CloseEnpsSurveyConfirmationModal
                show={showCloseSurveyConfirmationModal}
                handleClose={handleCloseCloseSurveyConfirmationModal}
            />
            {/* Close Survey Confirmation Modal end*/}

            {/* Delete modal start */}
            <DeleteModal
                show={deleteShow}
                handleClose={handleDeleteModalClose}
                onDelete={handleDeleteModalClose}
            />
            {/* Delete modal end */}

        </>
    )
}

export default EnpsResultsIndex