import { IProduct } from '@/app/modules/product'
import { Metadata } from 'next'

export const metadat: Metadata = {
  title: 'product',
  description: 'product page',
}

export default async function PostsPage(props: any) {
  // par default is SSG
  // so now is ISR

  // await new Promise<void>((resolve) => {
  //   setTimeout(() => {
  //     resolve()
  //   }, 4000)
  // })

  const dd = await fetch(
    `https://fakestoreapi.com/products/${props.params.id}`,
    { next: { revalidate: 120 } }
  )
  const product: IProduct = await dd.json()

  return (
    <>
      <div className=" w-full h-screen ">
        <h1 className=" text-3xl m-auto w-52 mt-10"> Product Page </h1>
        <div
          key={product.id}
          className="w-full max-w-xs overflow-hidden bg-white rounded-lg mt-10 shadow-lg m-auto dark:bg-gray-800"
        >
          <div className="py-5 text-center">
            <h1 className="block text-xl font-bold text-gray-800 dark:text-white">
              {product.title}
            </h1>
            <p className="text-sm text-blue-700 dark:text-gray-200">
              {product.category}
            </p>
            <span className="text-gray-700 dark:text-gray-400">
              {product.description}
            </span>
            <div className="flex items-center justify-center mt-6">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {product.price} $
              </span>
              <span className="text-sm font-semibold text-gray-500 mx-2"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
