// components/Header.tsx
import { FC } from 'react';

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({ title, description }) => {
  return (
    <header className="w-100 min-vh-100 d-flex align-items-center">
      <div className="container">
        <div className="row header-box d-flex align-items-center pt-lg-5">
          <div className="col">
            <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-0.6s">
              {title}
            </h1>
            <p className="mb-4 animate__animated animate__fadeInUp animate__delay-0.6s">
              {description}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
