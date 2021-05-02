import Skeleton from '@material-ui/lab/Skeleton';
import styles from './skeletonSearch.module.scss';
 
const SkeletonCountry=()=> {
  return (
    <Skeleton variant='text' height={35} className={styles.inputSkeleton} />
  );
}

export default SkeletonCountry