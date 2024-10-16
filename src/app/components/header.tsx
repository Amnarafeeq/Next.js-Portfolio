import Link from "next/link";

export default function Header() {
  return (
    <div>
      <nav className="flex max-sm:flex-col  justify-between items-center px-6 max-sm:px-10 py-4 border-b-2 bg-black bg-cover">
        <h1 className="text-2xl sm:text-3xl font-bold font-serif bg-gradient-to-r from-pink-800 via-yellow-400 to-red-500 bg-clip-text text-transparent">
          My Portfolio
        </h1>

        <ul className="flex  text-lg max-sm:text-xl mt-4 max-sm:mt-0 bg-gradient-to-r from-pink-300 to-slate-300 bg-clip-text text-transparent font-extrabold">
          <li className="mx-2 sm:mx-4 hover:bg-gradient-to-r from-pink-300 to-slate-300 bg-clip-text text-transparent">
            <Link href="#about-section">About</Link>
          </li>
          <li className="mx-2 sm:mx-4 hover:bg-gradient-to-r from-pink-300 to-slate-300 bg-clip-text text-transparent">
            <Link href="#skills-section">Skills</Link>
          </li>
          <li className="mx-2 sm:mx-4 hover:bg-gradient-to-r from-pink-300 to-slate-300 bg-clip-text text-transparent">
            <Link href="#projects-section">Projects</Link>
          </li>
          <li className="mx-2 sm:mx-4 hover:bg-gradient-to-r from-pink-300 to-slate-300 bg-clip-text text-transparent">
            <Link href="#contact-section">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
