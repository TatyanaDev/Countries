import Skeleton from '@material-ui/lab/Skeleton';
import styles from './skeletonTable.module.scss';

const SkeletonTable = () => {
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
};

export default SkeletonTable;
