import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class SingleChirp extends React.Component<ISingleChirpProps, ISingleChirpState> {
    constructor(props: ISingleChirpProps) {
        super(props);
        this.state = {
            chirp: this.props.match.params.chirp
        };
    
    }

    render() {
    return <h1>{this.state.chirp}</h1>;
    }

}

interface ISingleChirpProps extends RouteComponentProps<{ chirp: string }> {

}

interface ISingleChirpState {
    chirp: string;
}