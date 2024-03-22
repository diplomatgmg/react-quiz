import React, { type FC, type ReactElement } from 'react'
import styled from 'styled-components'

interface ProgressBarProps {
  status: number
  current: number
  all: number
}

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    margin-right: 8px;

`
const ProgressBarMain = styled.div`
    width: 100%;
    height: 10px;
    border-radius: 30px;
    background-color: rgb(232, 232, 232);
`

const ProgressText = styled.span`
    font-size: 14px;
    color: #666;
    padding: 0 8px;
`

const ProgressInner = styled.div<{ $status: number }>`
    width: ${({ $status }) => $status}%;
    height: 100%;

    transition: all .3s ease-in-out;

    border-radius: 30px;
    background: rgb(18, 231, 48);
    background: linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%);
`

const ProgressBar: FC<ProgressBarProps> = ({ status, current, all }): ReactElement => {
  return (
    <ProgressContainer>
      <ProgressText>{current}/{all}</ProgressText>
      <ProgressBarMain>
        <ProgressInner $status={status}/>
      </ProgressBarMain>
    </ProgressContainer>
  )
}

export default ProgressBar
