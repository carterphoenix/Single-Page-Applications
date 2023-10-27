import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
}
  from '@material-ui/core';
import './userList.css';

import { Link } from 'react-router-dom';

import axios from 'axios';

/**
 * Define UserList
 */
class UserList extends React.Component {
  constructor(props) {
    super(props);

    // Problem #1
    let userListModel = window.cs142models.userListModel();
    this.state = {
      userListModel: userListModel
    }

    // Problem #2
    this.state = {
      error: null,
      isLoaded: false,
      userListModel: []
    }

    this.handleSuccess = this.handleSuccess.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  getList() {
    const { error, isLoaded, userListModel } = this.state;

    if (error || !isLoaded) {
      return;
    }

    console.log(userListModel);

    var listContent = [];
    let itemId = 0;

    let divider = <Divider key={itemId - 1} />;
    for (let user of userListModel) {
      let text = user.first_name + " " + user.last_name;
      let listItem = <ListItem className="listItem"> {text} </ListItem>;


      let path = "/photos/:userId" + user._id;
      listContent.push(<Link to={path} key={itemId}> {listItem} {divider} </Link>);
      itemId += 1;
    }
    return <List component="nav"> {listContent} </List>
  }
  handleSuccess(value) {
    this.setState({
      isLoaded: true,
      userListModel: value.data
    });
  }
  handleError(error) {
    this.setState({
      isLoaded: true,
      error: error
    });
  }
  componentDidMount() {
    let promise = axios.get("/user/list");
    promise.then(this.handleSuccess, this.handleError);
  }
  render() {
    return (
      <div>

        {this.getList()}

      </div>
    );
  }
}

export default UserList;

