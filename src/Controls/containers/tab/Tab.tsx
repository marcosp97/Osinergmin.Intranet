import * as React from 'react'
import './Tab.css'
 
export interface ITabProps {
    active?: boolean;
}

export const Tab: React.FC<ITabProps> = ({ 

 }) => {
	return (
		<div className="tab-panel">
			<ul className="tab-group">
				<li className="tab">Operacional</li>
				<li className="tab">Certificaciones</li>
				<li className="tab is-active">Informacion SIG</li>
				<li className="tab">Contactos</li>
				<li className="tab">Docuemtnacion</li>
			</ul>
			<div className="panel-group">
				<div className="panel"> content 1</div>
				<div className="panel is-show"> content 2</div>
				<div className="panel"> content 3</div>
			</div>
		</div>
	)
}
