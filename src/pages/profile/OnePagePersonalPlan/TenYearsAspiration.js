import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useDispatch, useSelector } from 'react-redux';
import { createOrUpdateAspiration, fetchAspiration } from './TenYearsAspirationSlice';

function TenYearsAspiration() {
    const dispatch = useDispatch();
    const companyId = 1; // Replace with actual companyId
    const aspirationData = useSelector((state) => state.tenyearpersonalplan.aspiration);
    const loading = useSelector((state) => state.tenyearpersonalplan.loading);
    const error = useSelector((state) => state.tenyearpersonalplan.error);

    const [relationships, setRelationships] = useState('');
    const [achievements, setAchievements] = useState('');
    const [rituals, setRituals] = useState('');
    const [wealth, setWealth] = useState('');

    useEffect(() => {
        // Fetch aspiration data when the component mounts
        dispatch(fetchAspiration(companyId));
    }, [dispatch, companyId]);

    useEffect(() => {
        // Set the local state with the fetched aspiration data if it exists
        if (aspirationData && typeof aspirationData === 'object') {
            setRelationships(aspirationData.relationships || '');
            setAchievements(aspirationData.achievements || '');
            setRituals(aspirationData.rituals || '');
            setWealth(aspirationData.wealth || '');
        }
    }, [aspirationData]);

    const handleSave = () => {
        // Dispatch createOrUpdateAspiration with the current state values
        dispatch(createOrUpdateAspiration({
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
                                        <div className='text-center f-s-16 text-primary'>10-25 Years (Aspirations)</div>
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
                                        {/* <div className='max-width-300px'>
                                            <input
                                                type="number"
                                                value={wealth}
                                                onChange={(e) => setWealth(e.target.value)}
                                                className='form-control'
                                                placeholder='Wealth ($)'
                                            />
                                        </div> */}

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
                            <button onClick={handleSave} className='btn btn-primary'>
                                Save
                            </button>
                        </div>
                        {loading && <p>Loading...</p>}
                        {error && <p>Error: {error}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TenYearsAspiration;
