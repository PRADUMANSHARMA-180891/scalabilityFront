import React from 'react'
import AdvanceCriticalNumber from './AdvanceCriticalNumber'
import TeamPerformanceSection from '../TeamPerformanceSection'
import TaggedPriorities from '../TaggedPriorities'
import ParkingLot from '../ParkingLot'
import AdvanceMyUpdateSection from './AdvanceMyUpdateSection'

function MiddlePortion() {
  return (
    <>
        <AdvanceCriticalNumber/>
        <TeamPerformanceSection/>
        <TaggedPriorities />
        <ParkingLot />
        <AdvanceMyUpdateSection/>
    </>
  )
}

export default MiddlePortion