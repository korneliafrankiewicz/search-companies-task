import React from "react";
import { Image } from "semantic-ui-react";

export default class FetchComanies extends React.Component {
  props = {
    searchValue: "",
  };

  state = {
    data: [],
  };

  async componentDidMount() {
    const url = "https://recruitment.hal.skygate.io/companies";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ data: data });
  }

  render() {
    return (
      <div className="companies">
        {this.state.data
          .filter((item) =>
            item.name.toLowerCase().includes(this.props.searchValue)
          )
          .map((item, index) => (
            <>
              <div className="company">
                <Image
                  class="img"
                  src="https://d3dbtvmfwwhlf2.cloudfront.net/pub/Marketing/WEBSITE+images/Hero+pictures/kemppi-company-facts-hero.jpg?c=hero_jpg"
                  size="large"
                />

                <p>
                  <b>Name: </b>
                  {item.name}{" "}
                </p>
                <p>
                  <b>City: </b>
                  {item.city}
                </p>
                <p>
                  <b>Identity number: </b>
                  {item.id}{" "}
                </p>
              </div>
            </>
          ))}
      </div>
    );
  }
}
