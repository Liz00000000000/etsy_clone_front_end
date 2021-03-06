import React, { Component } from 'react'
import '../Styles/Message.css'

export class MessageAndResponse extends Component {
    state = {
        responseInput: '',
        responded: false,
        alreadyAnswerd: false 
    }

    handleOnChange = event => this.setState({ responseInput: event.target.value })

    submitResponse = () => {
    const obj = {content: this.state.responseInput, message_id: this.props.id, user_id: this.props.loggedInUser.id }
    this.setState({ responded: true })
    fetch('http://localhost:3000/replies', {
        method: 'POST',
        headers: {
             'content-type': 'application/json',
             accept: 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(res => res.json()).then(newReply => this.props.addReply(newReply))
    }

    render() {
        if(this.state.responded) return <div className='mess-wrap'>Thank you for your response </div>
        const item = this.props.items.find(item => item.id === this.props.item_id)
        const reply = this.props.replies.find(reply => reply.message_id === this.props.id)
        if(reply) return null
        return (
            <div className='mess-wrap'>
                <img className='small-pic' src={item.picture} alt={item.title}/> <h4 className='message-item'>{item.title}</h4>
                <h3>{this.props.content}</h3>
                <input className='input' onChange={this.handleOnChange} value={this.state.responseInput} placeholder='Respond to potenial buyer...'></input>
                <br></br><br></br><br></br>
                {/* {reply ? reply.content : null } */}
                <button className='ui tiny button' id='buttons' onClick={this.submitResponse}>Send Response</button>
            </div>
        )
    }
}

export default MessageAndResponse
