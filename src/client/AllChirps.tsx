import React from 'react';
import { Link } from 'react-router-dom';

export default class AllChirps extends React.Component<IAllChirpsProps, IAllChirpsState> {

    constructor(props: IAllChirpsProps) {
        super(props);

        this.state = {
            chirps: [
                {name: "Nellie",
                message: "Hello",
                id: 0},
                {name: "Nadia",
                message: "Hey",
                id: 1}
            ],
            //check this id logic
            id: null
        }
    }

    render() {
        return <ul className="list-chirps">
            {this.state.chirps.map(chirp => {
                return <li className="chirp">
                    {chirp}
                    {/* <Link to={`/${chirp.id}`}>{chirp}</Link> */}
                    </li>
            })}
        </ul>
    }

}

interface IAllChirpsProps {
        
}

interface IAllChirpsState {
    chirps: Array<object>;
    id: number;
}