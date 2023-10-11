import React from 'react';
import { Typography, Card, CardMedia, CardContent, Link } from '@mui/material';
import './userPhotos.css';

class UserPhotos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userId } = this.props.match.params;
    const photos = window.models.photoOfUserModel(userId);

    return (
      <div>
        <Typography variant="h4">User Photos</Typography>
        {photos.map((photo) => (
          <Card key={photo._id} style={{ marginBottom: '20px' }}>
            <CardMedia
              component="img"
              height="200"
              image={photo.file_name}
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
                    Created by:{' '}
                    <Link to={`/user/${comment.user._id}`}>
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
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
