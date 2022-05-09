import documents from '../index.json'
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from '../components/Link';
import lunr from 'lunr';

const Search = () => {
    const { query } = useRouter();
    var idx = lunr(function () {
        this.ref('name')
        this.field('text')

        documents.forEach((doc) => {
            this.add(doc)
        }
            , this)
    });
    return (
        <main>
            <Head>
                <title>Search Results</title>
            </Head>
            <form id="search" action="/search/" method="get">
                <input type="text" id="search-input" name="query" placeholder="Type here to search" />
                <input type="submit" value="search" />
            </form>
            <h1>Search Results</h1>
            <ul>
                {idx.search(String(query.query)).map((res) => (
                    <li>
                        <Link href={res.ref}>{res.ref}</Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}

export default Search;