import React from 'react';

class Rating extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      increasing: false,
      decreasing: false
    };
  }
  componentWillReceiveProps(nextProps){
  switch (nextProps.rating) {
    case 'loved it':
      this.setState({increasing:true,decreasing:false})
      break;
    case 'hated it':
    this.setState({increasing:false,decreasing:true})

      break;
    case 'indifferent':
    this.setState({increasing:false,decreasing:false})

      break;
    default:
      
  }
  }
  render() {
    let trend = 'stable';
    if (this.state.increasing) {
      trend = 'increasing';
    } else if (this.state.decreasing) {
      trend = 'decreasing';
    }

    return (
      <div>
        <p>Rating: {this.props.rating}</p>
        <p>Trend: {trend}</p>
      </div>
    )
  }
}

export default Rating;
