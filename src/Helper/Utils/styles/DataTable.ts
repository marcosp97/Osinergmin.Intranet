export const customStyles: any = {
	headCells: {
		style: {
			background: '#19559B',
			color: '#fff',
			fontSize: '12px',
			lineHeight: '17px',
			padding: '18.5px 10px',
		},
	},
	cells: {
		style: {
			fontSize: '12px',
			lineHeight: '17px',
			color: '#142832',
			borderLeft: '1px solid #CDD7DC',
			'&:last-child': {
				borderRight: '1px solid #CDD7DC',
				// borderBottom: '1px solid #CDD7DC'
			},
			paddingTop: '14px',
			paddingBottom: '14px',
		},

	}, 
	rows: {
		style: {
			'&:last-child': {
				// borderRight: '1px solid #CDD7DC',
				borderBottom: '1px solid #CDD7DC'
			},
		}
	},
	pagination: {
		style: {
			borderTop: "0px"
		}
	}
}

