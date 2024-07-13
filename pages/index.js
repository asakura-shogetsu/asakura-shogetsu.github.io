import {useState} from 'react'
import HeaderMenu from '../components/HeaderMenu'
import Hero from '../components/Hero'
import Notifications from '../components/Notifications'
import RecommendFoods from '../components/RecommendFoods'
import RestaurantViews from '../components/RestaurantViews'
import OtherMedias from '../components/OtherMedias'
import OtherMenus from '../components/OtherMenus'
import Restaurant from '../components/Restaurant'
import Media from '../components/Media'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'


export default function Home() {
  const restaurantName='うなぎ料理 和食処 松月';
  const [otherMenuExpanded, setOtherMenuExpanded]=useState(false)
  const [otherMediaExpanded, setOtherMediaExpanded]=useState(false)
  const router = useRouter()

  return (
    <div className='flex flex-col justify-center min-h-screen'>
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

            <div className='flex justify-center mx-5'>
              <button
                id='other-menus-button'
                className='px-16 py-4 justify-self-center text-center border border-white text-xl font-semibold'
                onClick={() => setOtherMenuExpanded(!otherMenuExpanded)}
              >
                {otherMenuExpanded ? '全てのお品書きを閉じる' : '全てのお品書きを見る'}
              </button>
            </div >
            {otherMenuExpanded && (
              <>
                <OtherMenus />
                <div className='flex justify-center mx-5'>
                  <button
                    className='px-16 py-4 justify-self-center text-center border border-white text-xl font-semibold'
                    onClick={() => {
                      setOtherMenuExpanded(false)
                      router.push('#other-menus-button')
                    }}
                  >
                    全てのお品書きを閉じる
                  </button>
                </div>
              </>
            )}
          </div>
        </div >

        <div id='media' className='bg-yellow w-full px-4 py-6'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>メディア掲載情報</h2>
            <Media />
            <div className='flex justify-center mx-5'>
              <button
                className='px-16 py-4 justify-self-center text-center border border-black text-xl font-semibold'
                onClick={() => setOtherMediaExpanded(!otherMediaExpanded)}
              >
                {otherMediaExpanded ? 'その他のメディア情報を閉じる' : 'その他のメディア情報を見る'}
              </button>
            </div>
            {otherMediaExpanded && (
              <>
                <OtherMedias />
                <div className='flex justify-center mx-5'>
                  <button
                    className='px-16 py-4 justify-self-center text-center border border-black text-xl font-semibold'
                    onClick={() => {
                      setOtherMediaExpanded(false)
                      router.push('#media')
                    }}
                  >
                    その他のメディア情報を閉じる
                  </button>
                </div>
              </>
          )}
        </div>

        <div id='restaurant' className='bg-black w-full px-4 py-6'>
          <h2 className='text-2xl font-semibold mb-2 text-center'>店舗情報</h2>
          <RestaurantViews />
          <Restaurant />
        </div>
      </main>

      <Footer restaurantName={restaurantName}/>
    </div>
  )
  }
