import Skeleton from "@material-ui/lab/Skeleton";
import styles from "./skeletonTable.module.scss";

export default function SkeletonTable() {
  return (
    <div className={styles.containerSkeleton}>
      {Array(10)
        .fill()
        .map((item, index) => (
          <Skeleton variant="text" height={50} key={index} />
        ))}
    </div>
  );
}
