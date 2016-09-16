import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


class Message extends Component{
	render(){
    const {message} = this.props;
    var formattedTime = moment(message.timeStamp).format('h:mm a')
		return(
			<div className="message">
				<strong></strong>{formattedTime} - {message.text}
			</div>
		)
	}
}

export default Message
