import {useState} from 'react'
import HeaderMenu from '../components/HeaderMenu'
import Hero from '../components/Hero'
import Notifications from '../components/Notifications'
import RecommendFoods from '../components/RecommendFoods'
import RestaurantViews from '../components/RestaurantViews'
import OtherMenus from '../components/OtherMenus'
import Restaurant from '../components/Restaurant'
import Footer from '../components/Footer'


export default function Home() {
  const restaurantName = 'うなぎ料理 和食処 松月';
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col justify-center min-h-screen">
      <HeaderMenu restaurantName={restaurantName}/>

      <main className="flex flex-col items-center justify-center w-full flex-1">
        <div id="hero-area" className="bg-black w-full">
          <Hero />
        </div>

        <div id="notice" className="bg-yellow w-full">
          <Notifications />
        </div>

        <div id="representative-dishes" className="bg-black w-full">
          <div className="pb-6">
            <RecommendFoods />

            <div className="flex justify-center mx-5">
              <button className="px-16 py-4 justify-self-center text-center border border-white text-xl font-semibold" onClick={() => setExpanded(!expanded)}>全てのお品書きを見る</button>
            </div>
            {expanded && <OtherMenus />}

          </div>
        </div>

        <div id="restaurant" className="bg-yellow w-full px-4 py-6">
          <h2 className="text-2xl font-semibold mb-2 text-center">店舗情報</h2>
          <RestaurantViews />
          <Restaurant />
        </div>
      </main>

      <Footer restaurantName={restaurantName}/>
    </div>
  )
}
