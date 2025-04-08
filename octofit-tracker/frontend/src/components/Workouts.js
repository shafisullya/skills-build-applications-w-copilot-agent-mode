import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://potential-rotary-phone-6vjj7v9vwx7246vg-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Workouts</h1>
      {workouts.map(workout => (
        <Card className="mb-3" key={workout._id}>
          <Card.Body>
            <Card.Title>{workout.name}</Card.Title>
            <Card.Text>{workout.description}</Card.Text>
            <Button variant="warning">Start Workout</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Workouts;
