import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function OneYearActivity() {
    return (
        <>
            <div className='card gth-bg-warning-light'>
                <div className='card-body'>
                    <div className='table-responsive table-bg-transparent'>
                        <table className='table table-borderless mb-0'>
                            <thead>
                                <tr>
                                    <th colSpan={4}>
                                        <div className='text-center f-s-16 text-primary'>1 Year (Activities)</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Relationships</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Achievements</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Rituals</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Wealth ($)</div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OneYearActivity