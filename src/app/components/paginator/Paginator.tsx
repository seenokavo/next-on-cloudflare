import styles from './Paginator.module.css';
import {faChevronCircleLeft, faChevronCircleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

interface Props {
    page: number;
    numOfPages: number;
    numOfResults: number;
}

export async function Paginator({page, numOfPages, numOfResults}: Props) {
    return (
        <div className={styles.container}>

            <div className={styles.left}>
                <a href={`?page=${page + -1}`}><FontAwesomeIcon icon={faChevronCircleLeft} size={'2xs'}/></a>
            </div>

            <span className={styles.pages}>Page {page} of {numOfPages}</span>

            <div className={styles.right}>
                <a href={`?page=${page + 1}`}><FontAwesomeIcon icon={faChevronCircleRight} size={'2xs'}/></a>
            </div>

            |

            <span className={styles.results}>{numOfResults} results</span>
        </div>
    );
}