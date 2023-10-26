export default function Footer() {
    return (
        <footer
        className="bg-neutral-200 font-rubik text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Developed by:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="/contact"
          >Joshua Nichols</a>
        </div>
        <div className="pb-5">
            <a href="https://github.com/JoshON5">
            <i className="fa-brands fa-github fa-2xl flex justify-center"></i>
            </a>
        </div>
      </footer>
    )
}