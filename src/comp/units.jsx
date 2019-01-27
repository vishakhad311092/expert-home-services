import React from "react";
import { Button } from "semantic-ui-react";
class Units extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unitCount: 0 };
  }

  increment = () => {
    console.log("Increment called");
    this.setState({ unitCount: this.state.unitCount + 1 });
  };

  decrement = () => {
    console.log("decrement called");
    return this.setState({ unitCount: this.state.unitCount - 1 });
  };

  render() {
    return (
      <div>
        Unit{" "}
        <Button className="padding-6 margin-2" onClick={this.increment}>
          +
        </Button>
        <span>{this.state.unitCount}</span>
        <Button className="padding-6 margin-2" onClick={this.decrement}>
          -
        </Button>
      </div>
    );
  }
}

export default Units;
