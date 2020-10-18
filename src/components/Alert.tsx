import React, { FC } from 'react'

export const Alert: FC = () => {


  return (    
    <div 
      className={`alert alert-secondary alert-dismissible alert-centered mb-4`}>

      Alert Test

      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>

    </div>
  )
}