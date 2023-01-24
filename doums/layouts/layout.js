import Link from 'next/link'
import { slugify } from '../utils/helpers'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { navItemLength } from '../ecommerce.config'

export default function Layout({ children, categories }) {
  if (categories.length > navItemLength) {
    categories = categories.slice(0, navItemLength)
  }
  return (
    <div>
      <nav>
        <div className="flex justify-center">
          <div className="
            mobile:px-12 sm:flex-row sm:pt-12 sm:pb-6 desktop:px-0
            px-4 pt-8 flex flex-col w-fw
          ">
            <div className="mb-4 sm:mr-16 max-w-48 sm:max-w-none">
              <Link href="/" aria-label="Home">

                <img src="/logo1.png" alt="logo" width="90" height="28" />

              </Link>
            </div>
            <div className="flex flex-wrap mt-1">
              <Link href="/" aria-label="Home">

                <p className="
                  sm:mr-8 sm:mb-0
                  mb-4 text-left text-smaller mr-4
                ">
                Home
                </p>

              </Link>
              {
                categories.map((category, index) => (
                  (<Link href={`/category/${slugify(category)}`} key={index} aria-label={category}>

                    <p className="
                        sm:mr-8 sm:mb-0
                        mb-4 text-left text-smaller mr-4
                      ">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </p>

                  </Link>)
                ))
              }
              <Link href="/categories" aria-label="All categories">

                <p className="
                  sm:mr-8 sm:mb-0
                  mb-4 text-left text-smaller mr-4 
                ">
                Category
                </p>

              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="mobile:px-10 px-4 pb-10 flex justify-center">
        <main className="w-fw">{children}</main>
      </div>
      <footer className="flex justify-center">
        <div className="
        sm:flex-row sm:items-center
        flex-col
        flex w-fw px-12 py-8
        desktop:px-0
        border-solid
        border-t border-gray-300">
          <span className="block text-gray-700 text-xs">Copyright © 2023 Trevor Familly. All rights reserved.</span>
        </div>
      </footer>
      <ToastContainer autoClose={3000} />
    </div>
  );
}