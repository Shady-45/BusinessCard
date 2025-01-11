import Text from './Text';
import { Gallery } from '../../utils/Gallery';

const Card = () => {
  return (
    <main>
      <div>
        <img src={Gallery.profile.icon} alt={Gallery.profile.alt} />
      </div>
      <div>
        <Text color='primary' fontSize='large'text={"Vishnu"} />
        <Text color='danger' fontSize='large'text={"24"} />
      </div>
      <div>
      <Text color='primary' fontSize='large'text={"24"} />
      </div>
    </main>
  );
};

export default Card;
