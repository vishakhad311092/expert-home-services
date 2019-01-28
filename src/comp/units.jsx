import React from "react";
import { Button } from "semantic-ui-react";
import { Divider, Icon } from "semantic-ui-react";
class Units extends React.Component {
  constructor(props) {
    super(props);
    this.state = { unitCount: 0, subtotal: 0, cost: 0 };
  }

  componentDidMount() {
    console.log("Component did mount ==>", this.props);
    this.setState({
      unitCount: this.props.unitCount,
      cost: this.props.cost,
      subtotal: this.props.cost
    });
  }

  increment = () => {
    console.log("Increment called");
    let cost = this.props.cost;
    let unitCount = this.state.unitCount + 1;
    let subtotal = unitCount * cost;
    this.setState({ unitCount, subtotal });
  };

  decrement = () => {
    console.log("decrement called");
    let cost = this.props.cost;
    let unitCount = this.state.unitCount - 1;
    let subtotal = unitCount * cost;
    this.setState({ unitCount, subtotal });
  };

  render() {
    return (
      <div>
        <div className="row display-flex">
          <div className="width-50 align-left padding-10 font-size-18">
            Unit
          </div>
          <div className="width-50 align-right">
            <Button
              className="margin-2"
              icon="minus"
              circular
              onClick={this.decrement}
            />
            <span>{this.state.unitCount}</span>
            <Button
              className="margin-2"
              icon="plus"
              circular
              onClick={this.increment}
            />
          </div>
        </div>
        <Divider inverted />
        <div className="row display-flex">
          <div className="width-50 align-left padding-10 font-size-18">
            Subtotal:{" "}
          </div>
          <div className="width-50 align-right">
            <div className="price-tag">
              <Icon name="rupee sign" />
              {this.state.subtotal}
            </div>
          </div>
        </div>
        <div className="actions display-flex ">
          <Button positive>Add to cart</Button>
          <Button primary>Continue</Button>
        </div>
      </div>
    );
  }
}

export default Units;
