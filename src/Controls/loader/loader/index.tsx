import * as React from 'react'
import { LoaderDiv, LoaderDivChild, LoaderRipple } from './Loader.styles'
interface ILoader {
	show: boolean
}

const Loader: React.FC<ILoader> = ({ show }) => {
 
	return (
		<LoaderDiv display={ show ? 'flex' : 'none' }>
			<LoaderRipple>
				<LoaderDivChild />
				<LoaderDivChild />
			</LoaderRipple>
		</LoaderDiv>
	)
}

export default Loader
