import Link from "next/link";


function ClientPage(){

    const clients = [
        {id: 'max', name:"Maximilian"},
        {id: 'manu', name: "Manual"}
    ];

    return (
        <div>
            <h1>The Projects of a given Client</h1>
            <ul>
                {/* <li><Link href='/clients/max'>Maximilian</Link></li>
                <li><Link href='/clients/manu'>Manuel</Link></li> */}

                {clients.map((client) =>(
                    <li key={client.id}>
                        <Link href={{
                            pathname: '/clients/[id]',
                            query:{id: client.id}
                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ClientPage;