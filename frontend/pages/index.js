import Link from 'next/link';

const Home = props => {
    return (
        <div>
            <p>index</p>
            <Link href="/sell"><a>Sell</a></Link>
        </div>
    )
}

export default Home;