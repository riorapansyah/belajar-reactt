class Message extends React.Component {
	render() {
		return (
			<div>
				<small>{this.props.sender}:</small>
				<p>{this.props.content}</p>
				<hr />
			</div>
		);
	}
}

// membuat komponen ChatBox
class ChatBox extends React.Component {
	render() {
		return (
			<div>
				<Message sender="dian" content="Sudah belajar React?" />
				<Message sender="petanikode" content="Ini lagi belajar React" />
				<Message sender="dian" content="OK, selamat belajar" />
			</div>
		);
	}
}

ReactDOM.render(<ChatBox />, document.getElementById("root"));