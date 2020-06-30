import * as React from 'react';
import AllChirps from './AllChirps';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleChirp from './SingleChirp';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<main className="container my-5">
				<Router>
					<Switch>
						<Route exact path='/' component={AllChirps} />
						<Route exact path='/admin' component={SingleChirp} />
					</Switch>
				</Router>
			</main>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;