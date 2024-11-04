import {memo}from 'react'
import clsx from 'clsx'
import style from "./index.module.scss"
import { ProgressCircle } from 'antd-mobile'

const Progression = memo(() => {
  return (
	<div className={clsx(style.container)}>
		 <ProgressCircle percent={25} style={{ '--size':"40rem",'--track-color':"#ffffff50",'--fill-color':"white"}}>
		<span style={{color:"white"}}>25%</span>

		 </ProgressCircle>
		<div className={clsx(style.description)}>
			<span>Your Daily Goals are almost Done 🔥</span>
			<span>1 of 4 completed</span>
		</div>
	</div>
  )
})

export default Progression