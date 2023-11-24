import React from 'react';
import styles from './GridRow.module.css';
import {CoinListEntry} from '@/model/get-coin-list';
import {ColumnName} from '@/app/components/grid-columns/name-column/ColumnName';
import {ColumnLastPrice} from '@/app/components/grid-columns/last-price-column/ColumnLastPrice';
import {ColumnPriceChange} from '@/app/components/grid-columns/price-change-column/ColumnPriceChange';
import {ColumnQuantity} from '@/app/components/grid-columns/quantity-column/ColumnQuantity';
import {ColumnSupply} from '@/app/components/grid-columns/supply-column/ColumnSupply';
import {ColumnChartClient} from '@/app/components/grid-columns/chart-column/ColumnChartClient';
// import {ColumnChart} from '@/app/components/grid-columns/chart-column/ColumnChart';

interface Props {
    coinEntry: CoinListEntry;
}

export default function GridRow(props: Props) {
    const coin: CoinListEntry = props.coinEntry;

    return (
        <div className={styles.row}>
            <ColumnName symbol={coin.symbol} displaySymbol={coin.display_symbol} imageId={coin.image_id}/>
            <ColumnLastPrice lastPrice={coin.last_price_usd}/>
            <ColumnPriceChange priceChange={coin.price_change_1D_percent}/>
            <ColumnPriceChange priceChange={coin.price_change_7D_percent}/>
            <ColumnQuantity quantity={coin.last_market_cap_usd}/>
            <ColumnQuantity quantity={coin.volume_24_usd}/>
            <ColumnSupply supply1={coin.supply} supply2={coin.total_supply}/>
            <ColumnChartClient symbol={coin.symbol}/>
        </div>
    );
}