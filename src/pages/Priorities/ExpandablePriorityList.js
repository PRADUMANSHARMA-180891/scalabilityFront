// import React from 'react'
// import PriorityItem from './PriorityItem'

// function ExpandablePriorityList() {
//   return (
//     <>
//       <ul className='priority-nested-list master'>
//         <li>
//           <div className='nested-collapse' id='nested-1'>
//             <i className="fi fi-br-add"></i>
//             <i className="fi fi-br-minus-circle"></i>
//           </div>
//           <div className="accordion priority-accordian" id="accordian-1">
//             <PriorityItem id={1} />
//             <ul className='priority-nested-list nested nested-1'>
//               <li>
//                 <div className='nested-collapse' id='nested-2'>
//                   <i className="fi fi-br-add"></i>
//                   <i className="fi fi-br-minus-circle"></i>
//                 </div>
//                 <PriorityItem id={2} />
//                 <PriorityItem id={3} />
//                 <ul className='priority-nested-list nested nested-2'>
//                   <li>
//                     <div className='nested-collapse' id='nested-3'>
//                       <i className="fi fi-br-add"></i>
//                       <i className="fi fi-br-minus-circle"></i>
//                     </div>
//                     <PriorityItem id={4} />
//                     <PriorityItem id={5} />
//                     <ul className='priority-nested-list nested nested-3'>
//                       <li>
//                         <div className='nested-collapse' id='nested-4'>
//                           <i className="fi fi-br-add"></i>
//                           <i className="fi fi-br-minus-circle"></i>
//                         </div>
//                         <PriorityItem id={6} />
//                         <PriorityItem id={7} />
//                         <ul className='priority-nested-list nested nested-4'>
//                           <li>
//                             <div className='nested-collapse' id='nested-5'>
//                               <i className="fi fi-br-add"></i>
//                               <i className="fi fi-br-minus-circle"></i>
//                             </div>
//                             <PriorityItem id={8} />
//                             <PriorityItem id={9} />
//                             <ul className='priority-nested-list nested nested-5'>
//                               <li>
//                                 <PriorityItem id={10} />
//                                 <PriorityItem id={11} />
//                               </li>
//                             </ul>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </li>
//       </ul>
//     </>
//   )
// }

// export default ExpandablePriorityList
import React, { useState } from 'react';
import PriorityItem from './PriorityItem';

function ExpandablePriorityList() {
  // State to keep track of expanded/collapsed lists
  const [expanded, setExpanded] = useState({
    nested1: false,
    nested2: false,
    nested3: false,
    nested4: false,
    nested5: false
  });

  // Function to toggle the nested list
  const toggleNested = (nestedId) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [nestedId]: !prevExpanded[nestedId]
    }));
  };

  return (
    <>
      <ul className='priority-nested-list master'>
        <li>
          <div className='nested-collapse' id='nested-1' onClick={() => toggleNested('nested1')}>
            <i className={expanded.nested1 ? "fi fi-br-minus-circle" : "fi fi-br-add"}></i>
          </div>
          <div className="accordion priority-accordian" id="accordian-1">
            <PriorityItem id={1} />
            {expanded.nested1 && (
              <ul className='priority-nested-list nested nested-1'>
                <li>
                  <div className='nested-collapse' id='nested-2' onClick={() => toggleNested('nested2')}>
                    <i className={expanded.nested2 ? "fi fi-br-minus-circle" : "fi fi-br-add"}></i>
                  </div>
                  <PriorityItem id={2} />
                  <PriorityItem id={3} />
                  {expanded.nested2 && (
                    <ul className='priority-nested-list nested nested-2'>
                      <li>
                        <div className='nested-collapse' id='nested-3' onClick={() => toggleNested('nested3')}>
                          <i className={expanded.nested3 ? "fi fi-br-minus-circle" : "fi fi-br-add"}></i>
                        </div>
                        <PriorityItem id={4} />
                        <PriorityItem id={5} />
                        {expanded.nested3 && (
                          <ul className='priority-nested-list nested nested-3'>
                            <li>
                              <div className='nested-collapse' id='nested-4' onClick={() => toggleNested('nested4')}>
                                <i className={expanded.nested4 ? "fi fi-br-minus-circle" : "fi fi-br-add"}></i>
                              </div>
                              <PriorityItem id={6} />
                              <PriorityItem id={7} />
                              {expanded.nested4 && (
                                <ul className='priority-nested-list nested nested-4'>
                                  <li>
                                    <div className='nested-collapse' id='nested-5' onClick={() => toggleNested('nested5')}>
                                      <i className={expanded.nested5 ? "fi fi-br-minus-circle" : "fi fi-br-add"}></i>
                                    </div>
                                    <PriorityItem id={8} />
                                    <PriorityItem id={9} />
                                    {expanded.nested5 && (
                                      <ul className='priority-nested-list nested nested-5'>
                                        <li>
                                          <PriorityItem id={10} />
                                          <PriorityItem id={11} />
                                        </li>
                                      </ul>
                                    )}
                                  </li>
                                </ul>
                              )}
                            </li>
                          </ul>
                        )}
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </div>
        </li>
      </ul>
    </>
  );
}

export default ExpandablePriorityList;


