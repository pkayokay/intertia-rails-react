import { Head } from '@inertiajs/react'
import { useState } from 'react'

export default function InertiaExample({ name }) {
  const [count, setCount] = useState(0)
  return (
    <div className="p-5">
      <Head title="Inertia Marketing Component" />
      <p>{name}</p>
      <button className="border rounded p-2" onClick={() => setCount(count + 1)}>
        Set count {count}
      </button>
    </div>
  )
}
