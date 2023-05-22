import '@/app/style.css'
import Link from 'next/link'

export default function Product() {
     return (
          <div>
               <h2>
                    This is your 'PRODUCT' page.
               </h2>
               <ul className='products-list'>
                    <li>
                         <Link href='/product/1'>Product 1</Link>
                    </li>
                    <li>
                         <Link href='/product/2'>Product 2</Link>
                    </li>
                    <li>
                         <Link href='/product/3'>Product 3</Link>
                    </li>
                    <li>
                         <Link href='/product/4'>Product 4</Link>
                    </li>
                    <li>
                         <Link href='/product/5'>Product 5</Link>
                    </li>
                    <li>
                         <Link href='/product/6'>Product 6</Link>
                    </li>
               </ul>
          </div>
     )
}
