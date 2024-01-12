import { FC } from 'react';
import './standard-cat.css';

export const StandardCat: FC = () => {
  return (
    <>
      <div className="stardardcat-container">
        <div className="lore-container">
          <p>Tenemos habitación normal.</p>
        </div>
      </div>
    </>
  );
};

export default StandardCat;