import React from 'react'

const RightSidebar = () => {
  return (
    <aside className='custom-scrollbar rightsidebar'>
      <div className='flex flex-1 justify-start flex-col'>
        <h3 className='text-heading4-medium text-light-1'>Suggested Comunities</h3>
      </div>
      <div className='flex flex-1 justify-start flex-col'>
        <h3 className='text-heading4-medium text-light-1'>Suggested User</h3>
      </div>
    </aside>
  )
}

export default RightSidebar