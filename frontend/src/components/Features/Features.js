import Feature from '../Feature/Feature';
import styles from './Features.module.css';
import rusa from '../../assets/images/main/rusa.jpg';
import ENDPOINTS from '../../utils/constants/endpoint';
import axios from 'axios';

const fetching = async () => {
  const { data } = await axios.get(`${ENDPOINTS.ATTIRE}`);
  const data2 = data.data;
  console.log(data2.map((item) => item.nama));
}

fetching();

const Features = (props) => { 
  const { title } = props;
  return (
    <>
      <h1 className="text-center mt-4">{title}</h1>

      <div className={styles.container}>
          <Feature
            itemTitle='Judul'
            itemPicture={rusa}
            description='sadjkhaskhsajdnnnnnnnnn'
          />
      </div>
    </>
  );
}

export default Features;