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
                <h1 className="text-secondary">chirper</h1>
                <button className="btn btn-info"><Link to="/addChirp">add chirp</Link></button>
                <button className="btn btn-info"><Link to="/">all chirps</Link></button>
            </div>
        )
    }

}

export interface INavProps {

}

interface INavState {

}