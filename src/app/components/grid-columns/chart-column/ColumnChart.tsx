import styles from './ColumnChart.module.css';
import {ChartData} from '@/app/components/grid-columns/chart-column/model';
import {ClientChart} from '@/app/components/grid-columns/chart-column/ClientChart';

interface Props {
    symbol: string;
}

export async function ColumnChart({symbol}: Props) {
    const data: ChartData = await fetch(`https://coincheckup.com/api/coincheckup/get_coin_charts?charts=7D&samples=48&coins=${symbol}`).then(res => res.json());

    return (
        <div className={styles.container}>
            <ClientChart data={data[symbol]['7D']}/>
        </div>
    );
}