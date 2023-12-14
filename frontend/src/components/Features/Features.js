import Feature from '../Feature/Feature';
import styles from './Features.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Features = ({title, endpoint}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllData = async () => {
      const result = await axios.get(endpoint);
      return setData(result.data.data);
    };

    getAllData();
  }, [endpoint]);

  return (
    <>
      <h1 className="text-center mt-4">{title}</h1>
      <div className={styles.container}>
        {data.map((item) => {
          return (
            <Feature
              key={item.id}
              itemTitle={item.nama}
              itemPicture={item.gambar}
              description={item.deskripsi}
            />
          );
        })}
      </div>
    </>
  );
};

export default Features;
