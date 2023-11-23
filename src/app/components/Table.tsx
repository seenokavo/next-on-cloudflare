import React from 'react';
import GridRow from '@/app/components/grid-row/GridRow';
import {CoinListEntry} from '@/model/get-coin-list';

interface Props {
    coinList: CoinListEntry[];
}

export default function Table(props: Props) {
    return (
        <div className="">
            {props.coinList.map((coin: CoinListEntry) => (<GridRow key={coin.symbol} coinEntry={coin}/>))}
        </div>
    );
}