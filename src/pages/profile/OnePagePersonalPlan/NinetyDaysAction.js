import React from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function NinetyDaysAction() {
    return (
        <>
            <div className='card gth-bg-warning-light'>
                <div className='card-body'>
                    <div className='table-responsive table-bg-transparent'>
                        <table className='table table-borderless mb-0'>
                            <thead>
                                <tr>
                                    <th colSpan={4}>
                                        <div className='text-center f-s-16 text-primary'>90 Days (Actions)</div>
                                    </th>
                                </tr>
                                <tr>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Start</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Start</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Start</div>
                                    </th>
                                    <th style={{ width: '25%' }}>
                                        <div className='text-center'>Start</div>
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

export default NinetyDaysAction