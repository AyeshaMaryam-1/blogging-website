import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="p-4">
        <div className="web-name flex">EduTech Insights</div>
        <ul className="container flex gap-8">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/courses">Courses</Link></li>
        </ul>
      </nav>
    </header>
  );
}