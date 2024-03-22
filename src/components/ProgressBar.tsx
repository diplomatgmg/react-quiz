import React, { type FC, type ReactElement } from 'react'

interface ProgressBarProps {
  status: number
}

const ProgressBar: FC<ProgressBarProps> = ({ status }): ReactElement => {
  return (
    <div className="progress">
      <div style={{ width: `${status}%` }} className="progress__inner"></div>
    </div>
  )
}

export default ProgressBar
