import React from 'react';
import styles from './styles/Table.module.css';

export default function SkeletonRow() {
  return (
    <tr className={styles.skeletonRow}>
      <td><div className={styles.skeletonBox} style={{ width: 60, height: 60 }} /></td>
      <td><div className={styles.skeletonBox} style={{ width: '70%', height: 12 }} /></td>
      <td><div className={styles.skeletonBox} style={{ width: 50, height: 12 }} /></td>
      <td><div className={styles.skeletonBox} style={{ width: 40, height: 12 }} /></td>
      <td><div className={styles.skeletonBox} style={{ width: 80, height: 30 }} /></td>
    </tr>
  );
}
