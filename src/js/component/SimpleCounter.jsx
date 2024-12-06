import React from "react";//include images into your bundle
import '../../styles/index.css'

const SimpleCounter = (props) => {
console.log(props.digitOne);

			return (
				<div className="bigCounter">
					<div className="calendar">
						<i className="far fa-clock"></i>
					</div>
					<div className="four">{props.digitFour % 10}</div>
					<div className="three">{props.digitThree % 10}</div>
					<div className="two">{props.digitTwo % 10}</div>
					<div className="one">{props.digitOne % 10}</div>
				</div>
			);
		}
export default SimpleCounter