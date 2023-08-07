import Link from "next/link";


function HomePage(){
  return(
    <div>
      <h1>The NextJs Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
        <Link href="/clients">ClientPage</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage;