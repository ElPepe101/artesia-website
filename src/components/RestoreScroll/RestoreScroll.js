// globals [location]
import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class RestoreScroll extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

RestoreScroll.propTypes = {
  location: PropTypes.shape({}).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default withRouter(RestoreScroll);
