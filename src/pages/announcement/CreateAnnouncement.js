// import React from 'react'

// export const CreateAnnouncement = () => {
//   return (
//     <div>
//         <div className={`create-announcement-slider ${isCreateAnnouncementOpen ? 'show' : ''}`}>
//                 <button className="close-button" onClick={handleCreateAnnouncementClose}>Close</button>
//                 <h2>Create New Announcement</h2>
                
//                 {/* Message Input */}
//                 <div className="input-section">
//                     <label htmlFor="message">Message:</label>
//                     <input
//                         type="text"
//                         id="message"
//                         value={message}
//                         onChange={(e) => setMessage(e.target.value)}
//                     />
//                 </div>

//                 {/* Checkbox Input */}
//                 <div className="input-section">
//                     <label>
//                         <input
//                             type="checkbox"
//                             checked={isChecked}
//                             onChange={(e) => setIsChecked(e.target.checked)}
//                         />
//                         Check me out
//                     </label>
//                 </div>

//                 {/* Save and Cancel Buttons */}
//                 <div className="button-section">
//                     <button className="save-button" onClick={handleSave}>Save</button>
//                     <button className="cancel-button" onClick={handleCreateAnnouncementClose}>Cancel</button>
//                 </div>
//             </div>
//     </div>
//   )
// }
