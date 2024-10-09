import { useState } from 'react';

export default function Player({initialName}) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(initialName);

	function handleClick() {
		setIsEditing((editing) => !editing)
		
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editableName = playerName;

	if(isEditing){
		editableName = <input type="text" required value={playerName} onChange={handleChange}/>;
	}

	return(
		<div className='indiv-player'>
			<div className='name-box'>
				{editableName}
			</div>	
			
			<button onClick={handleClick}>{isEditing ? 'Save' : 'Edit'}</button>
		</div>
	)
}