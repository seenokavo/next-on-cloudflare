import React from 'react';
import GridRow from '@/app/components/grid-row/GridRow';
import {CoinListEntry} from '@/model/get-coin-list';
import styles from './Table.module.css';

interface Props {
    coinList: CoinListEntry[];
}

export default function Table(props: Props) {
    return (
        <div className={styles.container}>
            {props.coinList.map((coin: CoinListEntry) => (<GridRow key={coin.symbol} coinEntry={coin}/>))}
        </div>
    );
}