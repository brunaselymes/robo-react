import React from 'react';
import Card from './Card';

const CardList = (props) => {
	return (
		<div>
			{
				props.robots.map(robot => {
					return (
						<Card
							id={robot.id}
							name={robot.name}
							email={robot.email}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;