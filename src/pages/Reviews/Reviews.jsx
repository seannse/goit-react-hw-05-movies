import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import API from 'services/API';
import { List } from './Reviews.style';

const api = new API();

function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  async function getDetails(id) {
    try {
      const data = await api.fetchReviews(id);
      setReviews(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  // if (!reviews) return null;

  return (
    <>
      <h2>Reviews</h2>
      <List>
        {reviews?.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <li key={id}>
              <b>{author}</b>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>We don't have any reviews for this movie.</p>
        )}
      </List>
    </>
  );
}

export default ReviewsPage;
