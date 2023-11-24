import Table from '@/app/components/Table';
import {GetCoinListResponse} from '@/model/get-coin-list';
import styles from './Page.module.css';

export const runtime = 'edge';

type Props = {
    params: {},
    searchParams: { [key: string]: string | string[] | undefined },
}

async function getCoins(page: string): Promise<GetCoinListResponse> {
    const res: Response = await fetch(`https://coincheckup.com/api/coincheckup/get_coin_list?order_by=last_market_cap_usd&order_direction=desc&limit=100&offset=${page}`);
    return res.json();
}

export default async function Home(props: Props) {
    const page: string | string[] | undefined = props?.searchParams?.page;
    const singlePage: string = page && typeof (page) === 'string' ? page : '';
    const coinsResponse: GetCoinListResponse = await getCoins(singlePage || '1');

    return (
        // <main className="flex min-h-screen flex-col items-center justify-between pl-28 pr-28">
        <main className={styles.container}>
            <Table coinList={coinsResponse.data}/>
        </main>
    );
}
