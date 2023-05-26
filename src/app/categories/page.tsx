import { SlideHeader } from "./components/SlideHeader"
import Categories from "./components/Categories"

export default function page(){

  return (
    <div>
      <p className='text-white text-2xl font-bold py-20 text-center'>Scroll down</p>
      <SlideHeader />
      <div className="flex justify-center">
        <Categories />
      </div>
    </div>
  )
}
