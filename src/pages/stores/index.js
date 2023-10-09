// src/pages/stores/index.js
import Image from 'next/image'
import { StoreImages, CategoriesImages } from '../../../public'
export default function Stores() {
    return (
        <div className="bg-campus-background p-4 md:p-8 lg:p-10">
            <h1 className="text-2xl md:text-3xl font-noto_serif ">Stores to help you save</h1>
            <div className='flex flex-wrap space-x-2 font-noto_serif'>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0 bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.grocery} alt="Grocery Category logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Grocery
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.beauty} alt="Beauty Category logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Beauty
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.convenience} alt="7 Eleven logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Convenience
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.alcohol} alt="Alcohol logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Alcohol
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.pets} alt="Pets logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Pets
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.pharmacy} alt="Pharmacy logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Pharmacy
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.retail} alt="Retail logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Retail
                    </div>
                </div>
                <div className='flex flex-col p-2 max-w-xs items-center'>
                    <div className="shrink-0  bg-slate-200 rounded-xl shadow-lg">
                        <Image src={CategoriesImages.wholesale} alt="Wholesale logo" width={50} height={50} />
                    </div>
                    <div className=" text-slate-500 text-sm">
                        Wholesale
                    </div>
                </div>

            </div>
            {/* Stores */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-2 font-noto_serif'>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex  items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.SevenEleven} alt="7 Eleven logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            7 Eleven
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Alcohol Convenience
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.Costco} alt="costco logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Costco
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Alcohol Wholesale
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.DollarTree} alt="Dollar Tree logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Dollar Tree
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Wholesale Convenience
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.Staples} alt="Staples logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Staples
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Retail Pharmacy Convenience
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.IndianMart} alt="Indian Market and Liquor logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Indian Market
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Pets Beauty
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.FoodsCo} alt="FoodsCo logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            FoodsCo
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Alcohol Convenience
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex  items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.SevenEleven} alt="7 Eleven logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            7 Eleven
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Alcohol Convenience
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.Costco} alt="costco logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Costco
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Groceries Alcohol Wholesale
                        </div>
                    </div>
                </div>
                <div className="p-6 w-full  mx-auto bg-campus-background rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <Image src={StoreImages.DollarTree} alt="Dollar Tree logo" width={60} height={60} />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-campus-text  border-black rounded-xl">
                            Dollar Tree
                        </div>
                        <div className="flex flex-wrap text-slate-500 text-sm">
                            Wholesale Convenience
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}