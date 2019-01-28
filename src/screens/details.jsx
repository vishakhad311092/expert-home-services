import React from "react";
import { Segment, Grid, Divider, Tab } from "semantic-ui-react";
import Description from "../comp/description.jsx";
import Units from "../comp/units.jsx";
import { withRouter } from "react-router-dom";
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedService: this.props.location.state };
  }

  render() {
    const panes = [
      {
        menuItem: "Option 1",
        render: () => (
          <Tab.Pane attached={false}>
            <Units cost={10} unitCount={1} />
          </Tab.Pane>
        )
      },
      {
        menuItem: "Option 2",
        render: () => (
          <Tab.Pane attached={false}>
            <b className="font-size-18">Upcoming</b>
          </Tab.Pane>
        )
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
