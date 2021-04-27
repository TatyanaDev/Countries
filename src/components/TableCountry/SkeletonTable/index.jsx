import Skeleton from '@material-ui/lab/Skeleton';
import styles from './skeletonTable.module.scss';

export default function SkeletonTable () {
  return (
    <div className={styles.containerSkeleton}>
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
      <Skeleton variant='text' height={50} />
    </div>
  );
}
