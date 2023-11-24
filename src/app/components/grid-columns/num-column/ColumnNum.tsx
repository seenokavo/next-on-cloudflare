import styles from './ColumnNum.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCoffee} from '@fortawesome/free-solid-svg-icons';

interface Props {
    index: number;
}

export function ColumnNum({index}: Props) {

    return (
        <div className={styles.container}>
            {index + 1}
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faCoffee} size={'2xs'}/>
            </div>
        </div>
    );
}