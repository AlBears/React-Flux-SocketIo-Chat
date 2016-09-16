import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';


class Message extends Component{
	render(){
    const {message} = this.props;
    var formattedTime = moment(message.timeStamp).format('h:mm:ss a')
		return(
			<div className="message">
				<strong>{message.user}</strong> {formattedTime} - {message.text}
			</div>
		)
	}
}

export default Message
