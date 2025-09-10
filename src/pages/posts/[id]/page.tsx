interface PostProps {
    params: {
        id: string;
    };
}

export default function Post({ params }: PostProps) {
    return (
        <main> 
            <h1>Post ID:{params.id}</h1>
        </main>
    );
}