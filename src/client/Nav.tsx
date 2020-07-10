import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

export default class Nav extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h1>chirper</h1>
                <Link to="/addChirp">Add Chirp</Link>
                <Link to="/">All Chirps</Link>
            </div>
        )
    }

}

export interface INavProps {

}

interface INavState {

}