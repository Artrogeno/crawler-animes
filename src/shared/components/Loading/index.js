import React from 'react'

const Loading = ({ loading, children }) =>
  loading ? (
    <div className="loading-spinner">
      <div className="right-side">
        <div className="bar"></div>
      </div>
      <div className="left-side">
        <div className="bar"></div>
      </div>
    </div>
  ) : (
    children
  )
export default Loading
