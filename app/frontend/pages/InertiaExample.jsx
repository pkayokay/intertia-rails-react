import { Head } from '@inertiajs/react'
import { useState } from 'react'
import { Link } from '@inertiajs/react'

import reactSvg from '/assets/react.svg'
import inertiaSvg from '/assets/inertia.svg'
import viteRubySvg from '/assets/vite_ruby.svg'

import cs from './InertiaExample.module.css'

export default function InertiaExample({ name }) {
  const [count, setCount] = useState(0)

  return (
    <>
      <Head title="Inertia + Vite Ruby + React Example" />
      <div className={cs.root}>
        <p className="mb-6 font-medium text-lg text-white rounded-full py-2 bg-rose-800 inline-block px-4">SSR is enabled, view source to see.</p>
        <h1 className={cs.h1}>Hello {name}!</h1>
        <div>
          <a href="https://inertia-rails.netlify.app" target="_blank">
            <img className={cs.logo} src={inertiaSvg} alt="Inertia logo" />
          </a>
          <a href="https://vite-ruby.netlify.app" target="_blank">
            <img
              className={`${cs.logo} ${cs.vite}`}
              src={viteRubySvg}
              alt="Vite Ruby logo"
            />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              className={`${cs.logo} ${cs.react}`}
              src={reactSvg}
              alt="React logo"
            />
          </a>
        </div>

        <h2 className={`${cs.h2} mb-6`}>Inertia + Vite Ruby + React</h2>
        <div className="card">
          <button
            className={`${cs.button} mb-6`}
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p>
            Edit <code>app/frontend/pages/InertiaExample.jsx</code> and save to
            test HMR
          </p>
        </div>
        <p className={cs.readTheDocs}>
          Click on the Inertia, Vite Ruby, and React logos to learn more
        </p>
        <div className="mt-10 flex flex-col items-center justify-center space-y-2">
          <Link href="/marketing_inertia" className="rounded-full py-2 px-5 bg-neutral-800 inline-block text-white">Inertia Marketing Page</Link>
          <a href="/marketing_rails" className="rounded-full py-2 px-5 bg-neutral-800 inline-block text-white">Rails Marketing Page</a>
        </div>
      </div>
    </>
  )
}
