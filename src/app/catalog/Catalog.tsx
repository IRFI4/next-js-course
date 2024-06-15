'use client'

import { FC } from 'react'
import styles from './Catalog.module.css'
import Image from 'next/image'

const Catalog: FC<{ data: any }> = ({ data }) => {
    return (
        <div className={styles.div}>
            <h1 className={styles.heading}>Catalog</h1>
            <Image src='/next.svg' alt='Logo' width={200} height={200} />
            {data.map((post: any) => (
                <div key={post.id}>{post.title}</div>
            ))}
        </div>
    )
}

export default Catalog