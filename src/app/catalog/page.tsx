'use client'

import Image from 'next/image'
import styles from './Catalog.module.css'
import { useRouter } from 'next/navigation'

export default function CatalogPage() {
    const { push } = useRouter()

    push('/product/1')

    return <div className={styles.div}>
        <h1 className={styles.heading}>Catalog</h1>
        <Image src='/next.svg' alt='Logo' width={200} height={200} />
    </div>
}
