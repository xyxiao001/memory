import * as React from 'react';
import { observer } from 'mobx-react';

interface IHomeProps {
}

interface IHomeState {
  num: number;
}


@observer
export default class Home extends React.Component<IHomeProps, IHomeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      num : 0
    };
  }

  public add = () => {
    const num = this.state.num;
    this.setState({
      num: num + 1
    });
  }

  public reduce = () => {
    const num = this.state.num;
    this.setState({
      num: num - 1
    });
  }

  public componentDidMount() {
    console.log(this.state);
  }

  public render() {
    return (
      <main>
        <p>{ this.state.num }</p>
        <button onClick={this.add}>add</button>
        <button onClick={this.reduce}>reduce</button>
      </main>
    );
  }
}