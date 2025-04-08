import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://potential-rotary-phone-6vjj7v9vwx7246vg-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Activities</h1>
      {activities.map(activity => (
        <Card className="mb-3" key={activity._id}>
          <Card.Body>
            <Card.Title>{activity.activity_type}</Card.Title>
            <Card.Text>Duration: {activity.duration}</Card.Text>
            <Button variant="primary">View Details</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Activities;
