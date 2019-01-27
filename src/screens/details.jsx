import React from "react";
import { Segment, Grid, Divider, Tab } from "semantic-ui-react";
import Description from "../comp/description.jsx";
import Units from "../comp/units.jsx";
import { withRouter } from "react-router-dom";
class Details extends React.Component {

  constructor(props){
      super(props);
      this.state = {selectedService: this.props.location.state};
  }

  render() {
    const panes = [
      {
        menuItem: "Tab 1",
        render: () => (
          <Tab.Pane attached={false}>
            <p>
              <Units />
            </p>
            <p>SubTotal: </p>
          </Tab.Pane>
        )
      },
      {
        menuItem: "Tab 2",
        render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane>
      }
    ];

    return (
      <div>
        <Segment className="container">
          <Grid columns={2} relaxed="very">
            <Grid.Column>
              <Description
                title={this.state.selectedService.title}
                details={this.state.selectedService.details}
                subTitle={this.state.selectedService.subtitle}
              />
            </Grid.Column>
            <Grid.Column>
              <Tab panes={panes} />
            </Grid.Column>
          </Grid>

          <Divider vertical />
        </Segment>
      </div>
    );
  }
}

export default withRouter(Details);
