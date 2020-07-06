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
    
    }

    //make a get request for the specific chirp

    //send user back to main page when chirp is deleted
    deleteText() {

    }

    //make a put request for that chirp with a save edit button and send user back to main page
    editText() {
        
    }
    
    textChange() {

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

interface ISingleChirpProps extends RouteComponentProps<{ chirp: string }> {

}

interface ISingleChirpState {
    user: string,
    text: string
}