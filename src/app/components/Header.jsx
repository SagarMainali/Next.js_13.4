import Link from "next/link"
import Image from "next/image"
import '@/app/style.css'

export default function Header() {
     return (
          <header>
               <Link href='/' className="logo">
                    <Image src='/reddit.svg' height={50} width={50}/>
               </Link>
               <nav>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/product'>Products</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                    <li><Link href='/about'>About</Link></li>
               </nav>
          </header>
     )
}
