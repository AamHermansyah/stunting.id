import Link from 'next/link'

function Footer() {
  return (
    <footer className="bg-white mt-16 pb-4">
      <div className="w-full">
        <div className="sm:flex sm:items-center sm:justify-between space-y-2">
          <Link href="/" className="text-primary font-semibold">Stunting.id</Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            StuntingApp
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer