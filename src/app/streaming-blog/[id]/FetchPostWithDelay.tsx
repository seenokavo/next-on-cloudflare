interface Props {
    id: string;
}

function delay(ms: number): Promise<void> {
    return new Promise((resolve, _) => {
        setTimeout(resolve, ms);
    });
}

export default async function FetchPostWithDelay({id}: Props) {
    await delay(5500);
    const post: Post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json());

    return (
        <div className="max-w-sm max-h-60 overflow-hidden">
            <ul>
                {/*<li>{post?.id}</li>*/}
                <li>{post?.title}</li>
                <li>{post?.body}</li>
            </ul>
        </div>
    );
}
