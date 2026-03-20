import { Size } from "@/interfaces"
import clsx from "clsx";

interface Props {
    selectedSize: Size;
    availableSizes: Size[];
}


export const SelectedSize = ({ selectedSize, availableSizes }: Props) => {

    return (
        <section className='my-4 gap-2 w-fit'>
            <h3 className="text-md font-bold">Tallas Disponibles</h3>
            <div className="flex">
                {
                    availableSizes.map(size => (
                        <button
                            key={size}
                            className={
                                clsx(
                                    'mx-2  text-lg hover:cursor-pointer hover:underline',
                                    {
                                        'underline' : selectedSize === size,
                                    }
                                )
                            }
                        >
                            {size}
                        </button>
                    ))
                }
            </div>
        </section>
    )
}
