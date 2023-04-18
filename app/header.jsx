import Link from 'next/link'
import React from 'react'
import { LogOutButton } from '../components/Clients'

const header = () => {
    return (
        <div className='header'>
            <div>
                <h2>Todo</h2>
            </div>
            <article>
                <Link href={ "/" }>Home</Link>
                <Link href={ "/about" }>About</Link>
                {/* <Link href={ "/login" }>Login</Link> */ }
                <LogOutButton />
            </article>
        </div>
    )
}

export default header