import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { createOneYearActive, fetchOneYearActive } from './OneYearActiveSlice';

function OneYearActivity() {
    const dispatch = useDispatch();
    const companyId = 1; // Replace with actual companyId

    const activityData = useSelector((state) => state.oneyearactive.aspiration);
    const loading = useSelector((state) => state.oneyearactive.loading);
    const error = useSelector((state) => state.oneyearactive.error);

    const [relationships, setRelationships] = useState('');
    const [achievements, setAchievements] = useState('');
    const [rituals, setRituals] = useState('');
    const [wealth, setWealth] = useState('');

    useEffect(() => {
        // Fetch activity data when the component mounts
        dispatch(fetchOneYearActive(companyId));
    }, [dispatch, companyId]);

    useEffect(() => {
        // Set the local state with the fetched activity data if it exists
        if (activityData && typeof activityData === 'object') {
            setRelationships(activityData.relationships || '');
            setAchievements(activityData.achievements || '');
            setRituals(activityData.rituals || '');
            setWealth(activityData.wealth || '');
        }
    }, [activityData]);

    const handleSave = () => {
        // Dispatch createOneYearActive with the current state values
        dispatch(createOneYearActive({
            companyId,
            relationships,
            achievements,
            rituals,
            wealth: parseFloat(wealth) || 0, // Convert wealth to float, default to 0 if NaN
        }));
    };

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
                                    <th style={{ width: '25%' }} className='text-center'>Relationships</th>
                                    <th style={{ width: '25%' }} className='text-center'>Achievements</th>
                                    <th style={{ width: '25%' }} className='text-center'>Rituals</th>
                                    <th style={{ width: '25%' }} className='text-center'>Wealth ($)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={relationships}
                                                onChange={(event, editor) => {
                                                    setRelationships(editor.getData());
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={achievements}
                                                onChange={(event, editor) => {
                                                    setAchievements(editor.getData());
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={rituals}
                                                onChange={(event, editor) => {
                                                    setRituals(editor.getData());
                                                }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <div className='max-width-300px'>
                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={wealth}
                                                onChange={(event, editor) => {
                                                    setWealth(editor.getData());
                                                }}
                                            />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button onClick={handleSave} className='btn btn-primary'>Save</button>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default OneYearActivity;
