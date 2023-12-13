import Feature from '../Feature/Feature';
import styles from './Features.module.css';
import Rusa from '../../assets/images/main/rusa.jpg';

const Features = (props) => { 
  const { title } = props;

  return (
    <>
      <h1 className="text-center mt-4">{title}</h1>
      <div className={styles.container}>
        <Feature
          itemTitle='Judul'
          itemPicture={Rusa}
          description='sadjkhaskhsajdnnnnnnnnn'
        />
      </div>
    </>
  );
}

export default Features;