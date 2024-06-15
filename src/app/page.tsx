import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Home page description',
}

export default function Home() {
  return (
    <div>
      <h1>Next.js course</h1>
    </div>
  );
}
