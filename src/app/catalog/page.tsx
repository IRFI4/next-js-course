import { Metadata } from "next"
import Catalog from "./Catalog"

// SSR, ISR, SSG

export const metadata: Metadata = {
    title: 'Product'
}

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'force-cache',
        next: {
            revalidate: 3600,
        }
    })
    const data = await response.json()
    return data
}

export default async function CatalogPage() {
    const posts = await fetchData()

    return <Catalog data={posts} />
}
