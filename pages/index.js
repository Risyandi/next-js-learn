import Link from 'next/link';

const Index = () => (
    <div>
        <h1>Homepage Welcome Next JS</h1>
        <div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    </div>
);

export default Index;