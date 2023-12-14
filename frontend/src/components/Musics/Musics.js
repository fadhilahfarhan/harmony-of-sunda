import axios from 'axios';
import { useEffect, useState } from 'react';
import Music from "../Music/Music";

const Musics = ({title, endpoint}) => {
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
              <Music
                key={item.id}
                itemTitle={item.judul}
                
              />
            );
          }
        )}
      </div>
    </>
  );
}

export default Musics;