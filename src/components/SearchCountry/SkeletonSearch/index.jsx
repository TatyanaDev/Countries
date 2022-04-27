import Skeleton from '@material-ui/lab/Skeleton';
import styles from './skeletonSearch.module.scss';

export default function SkeletonCountry () {
  return (
    <Skeleton variant='text' height={35} className={styles.inputSkeleton} />
  );
}
