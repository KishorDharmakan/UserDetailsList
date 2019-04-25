import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserList as fetchUserListActionCreator } from '../../actions/UserList/action_creators';
//import Table from '../common/Table';
import AGGridReact from '../common/AGGridReact';
import Spinner from '../common/Spinner';
import Alert from '../common/Alert';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUserList();
  }

  render() {
    console.log('inside render of UserList this.props:', this.props);
    return (
      <div>
        {this.props.loading
          ?
          <Spinner />
          :
          this.props.error ? <Alert errorMessage={this.props.error} />
            : <AGGridReact />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.listUsers.loading,
  data: state.listUsers.data,
  error: state.listUsers.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchUserList: () => dispatch(fetchUserListActionCreator())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);