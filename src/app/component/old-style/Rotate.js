import { startAction } from '../../actions/startAction';
import { stopAction } from '../../actions/stopAction';
import { connect } from 'react-redux';
import React from 'react';
import './rotate.scss';
import { getTodos } from '../../reducers/selectors';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { stopActionCreator, startActionCreator } from '../../actions/actionCreator/actionCreator';

class Rotate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rotating: false };
  }
  componentDidMount() {
    console.log('Component Mounted');
  }

  render() {
    let keyin = 0;
    return (
      <div>
        <img
          src="./images/arrow.png"
          className={
            'App-logo' + (this.props.rotate?.rotating ? '' : ' App-logo-paused')
          }
          alt="logo"
          onClick={
            this.props.rotate?.rotating
              ? this.props.stopActionCreator
              : this.props.startActionCreator
          }
		  id="abc"
        />
        <br />
        Get Todos using selector
		{console.log('I', this.props)}
        {this.props.todos?.data?.map((i) => {
		
          keyin++;
          if (keyin == 1) {
            return <li key={keyin}>{i.title}</li>;
          }
        })}
        <br />
        <Link to="/">Home</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rotate: state.rotate,
  todos: getTodos(state),
});

//Both do the same thing one is actionacreator and other is just action

// const mapDispatchToProps = (dispatch) => ({
//   startAction: () => dispatch(startAction),
//   stopAction: () => dispatch(stopAction),
// });

function mapDispatchToProps(dispatch) {
	return bindActionCreators({startActionCreator, stopActionCreator}, dispatch)
  }
export default connect(mapStateToProps, mapDispatchToProps)(Rotate);
