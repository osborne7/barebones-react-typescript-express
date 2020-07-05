import React from 'react';
import { RouteComponentProps } from 'react-router';

export default class AddChirp extends React.Component<IAddChirpProps, IAddChirpState> {
    constructor(props: IAddChirpProps) {
        super(props);

        this.state = {
            user: '',
            text: ''
        }
    }

    async handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        const data = { user: this.state.user, text: this.state.text};
        e.preventDefault();
        if( this.state.user && this.state.text ) {
            try {
                //build out POST request for chirp
                await fetch('/api/chirps/', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json"
                    }
                });
                this.props.history.push('/');
            }
            catch (err) {
                console.log(err);
            }
        } else {
            alert('Please enter a username and chirp to post!');
        }

    }

    render() {
        return (
        <form>
            <label htmlFor="user">Name</label>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>)=> this.setState({user: e.target.value})}type="text" placeholder="Add username here" value={this.state.user}/>
            <label htmlFor="text">Write Chirp</label>
            <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({text: e.target.value})}type="text" placeholder="Add chirp here" value={this.state.text} />
            <button onClick={this.handleSubmit}>Post</button>
        </form>
        )
    }

}

interface IAddChirpProps extends RouteComponentProps {

}

interface IAddChirpState {
    user: string;
    text: string;
}