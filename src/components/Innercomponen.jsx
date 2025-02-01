/* eslint-disable react/prop-types */
import styles from './Innercomponent.module.css'
export default function Innercomponen({children}) {
  return (
    <div className={styles.innercomponent}>{children}</div>
  )
}
