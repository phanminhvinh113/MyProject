import styles from './Heading.module.scss'
import clsx from 'clsx'
function Heading({pri}){
    const classes = clsx(styles.btn, {
        [styles.pri]:pri
    })
    return(
        <>
            <button className={classes}>Click Me!</button>
        </>
    )
}
export default Heading