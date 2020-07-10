import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SingleChirp extends React.Component<ISingleChirpProps, ISingleChirpState> {
    constructor(props: ISingleChirpProps) {
        super(props);
        this.state = {
            user: '',
            text: ''
            // chirp: this.props.match.params.chirp
        };
        this.editText = this.editText.bind(this);
        this.deleteText = this.deleteText.bind(this);
    
    }

    //make a get request for the specific chirp
    async componentDidMount() {
        let id = this.props.match.params.id
        try {
            let chirpResponse = await fetch(`/api/chirps/${id}`);
            let chirp = await chirpResponse.json;
            // this.setState({ 
            //     user: chirp.user, 
            //     text: chirp.text
            //     //resolve above user and text discrepancies
            // })
        } catch(err) {
            console.log(err);
        }
    }

    //send user back to main page when chirp is deleted
    async deleteText() {
        let id = this.props.match.params.id;
        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'DELETE'
            });
            this.props.history.push('/');
        }
        catch(err) {
            console.log(err);
        }
    } 

    //make a put request for that chirp with a save edit button and send user back to main page
    async editText(e: React.MouseEvent<HTMLButtonElement>) {
        let id = this.props.match.params.id;
        let data = {
            user: this.state.user,
            text: this.state.text
        }
        e.preventDefault();

        try {
            await fetch(`/api/chirps/${id}`, {
                method: 'PUT',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data)
            });
            this.props.history.replace('/');
        } catch(err) {
            console.log(err);
        }
    };
    
    textChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({text: e.target.value});
    }

    render() {
    // return <h1>{this.state.chirp}</h1>;
    return (
    <div>
        <div>
            <input type="text" defaultValue={this.state.text} onChange={this.textChange}/>
        </div>
        <div>
            <button onClick={this.editText}>Edit</button>
            <button onClick={this.deleteText}>Delete</button>
        </div>
    </div>
    )
    }

}

interface ISingleChirpProps extends RouteComponentProps<{ id: string }> {

}

interface ISingleChirpState {
    user: string,
    text: string
}