import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function NoFoundPage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  return (
    <div>
      <p>Page not found</p>
    </div>
  );
}
