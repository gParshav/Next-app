import Link from 'next/link'

const Page = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <Link href='events/london'>
                    <img/>
                    <h2>Events in London</h2>
                </Link>

                <Link href=''>
                    <img/>
                    <h2>Events in San Fransisco</h2>
                </Link>

                <Link href=''>
                    <img/>
                    <h2>Events in Barcelona</h2>
                </Link>
            </div>
        </div>
    )
}


export default Page;


