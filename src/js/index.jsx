import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <div>
                <p> Hello React! </p>
                <Photo src='http://tinyurl.com/lkevsb9' caption='Hong Kong' />
            </div>
        );
    }
}

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    toggleLiked() {
        this.setState({liked: !this.state.liked});
    }

    render() {
        var buttonClass= this.state.liked?'active':'';
        return (
            <div className='photo'>
                <img src={this.props.src} />
                <button onClick={this.toggleLiked.bind(this)} className={buttonClass}>
                    toggleLiked
                </button>
                <span>{this.props.caption}</span>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
