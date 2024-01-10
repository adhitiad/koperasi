import Image from "next/image";
import Link from "next/link";

export default function ProductList({ product }: any) {
  const { id, name, price, image, button, href, description, onclick } =
    product;
  return (
    <>
      <div key={id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-slate-600 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={href} className="text-gray-900 hover:text-gray-600">
                {name.substring(0, 25)}
              </Link>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{price}</p>
        </div>
        <button
          type="button"
          onClick={onclick}
          className="text-white bg-green-500 hover:bg-green-600 border border-green-500 font-bold py-2 px-4 rounded"
        >
          {button}
        </button>
      </div>
    </>
  );
}
