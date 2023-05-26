import { SlideHeader } from "./components/SlideHeader"
import { FadeHeader } from "./components/FadeHeader"
import Categories from "./components/Categories"

export default function page(){

  return (
    <section>
      <p className='text-white text-2xl font-bold py-[200px] text-center'>Scroll down</p>
      {/* <SlideHeader /> */}
      <FadeHeader />
      <div className="flex justify-center">
        <Categories />
      </div>
    </section>
  )
}
