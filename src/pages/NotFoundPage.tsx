import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-y-4">
          <Link to={ROUTES.HOME}>
            <Button variant="primary" size="lg" className="w-full">
              Go Back Home
            </Button>
          </Link>
          <Link to={ROUTES.WORK}>
            <Button variant="outline" size="lg" className="w-full">
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;