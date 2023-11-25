import Table from '@/app/components/table/Table';
import {GetCoinListResponse} from '@/model/get-coin-list';
import styles from './Page.module.css';
import {Title} from '@/app/components/title/Title';
import {Paginator} from '@/app/components/paginator/Paginator';

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
        <main className={styles.container}>
            <Title/>
            <Paginator
                numOfResults={coinsResponse.meta.results}
                numOfPages={Math.ceil(coinsResponse.meta.results / 100)}
                page={Number(singlePage || 1)}/>
            <Table coinList={coinsResponse.data}/>
        </main>
    );
}
