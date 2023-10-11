import React from 'react';
import { Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import './UserPhotos.css';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userId } = this.props.match.params;
    const userPhotos = window.models.photoOfUserModel(userId);

    return (
      <div>
        <Typography variant="h4">User Photos</Typography>
        {userPhotos.map((photo) => (
          <Card key={photo._id} style={{ marginBottom: '20px' }}>
            <CardMedia
              component="img"
              height="200"
              image={`images${photo.file_name}`}
              alt={photo.file_name}
            />
            <CardContent>
              <Typography variant="body1">
                Creation Date/Time: {photo.date_time}
              </Typography>
              <Typography variant="body1">Comments:</Typography>
              {photo.comments.map((comment) => (
                <div key={comment._id}>
                  <Typography variant="body1">
                    Created by{' '}
                    <Link to={`/users/${comment.user._id}/details`}>{comment.user.first_name} {comment.user.last_name}</Link>
                  </Typography>
                  <Typography variant="body1">{comment.comment}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }
}

export default UserPhotos;

