import CardHome from '../components/CardHome'
import { IProduct } from '../modules/product'

export default async function PostsPage() {
  // par default is SSG
  // par defualt is cache :force-cache
  // so now is SSR
  const dd = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store',
  })
  const products: IProduct[] = await dd.json()

  return (
    <>
      <h1 className=" text-3xl m-auto w-56 mt-10"> Product Page </h1>
      <div className=" flex flex-wrap lg:w-[95%] w-full m-auto h-full p-4 justify-center">
        {products.map((item: IProduct, index: number) => {
          return <CardHome item={item} key={index} />
        })}
      </div>
    </>
  )
}
