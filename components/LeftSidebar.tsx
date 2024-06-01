import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LeftSidebar = () => {
  return (
    <section className='left-sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href='/'>
                <Image src=''/>
            </Link>
        </nav>
    </section>
  )
}

export default LeftSidebar