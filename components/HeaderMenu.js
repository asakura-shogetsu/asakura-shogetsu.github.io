import Head from 'next/head'
import { useState } from 'react'

export default function HeaderMenu(props) {
  const [menuExpanded, setMenuExpanded] = useState(false)

  function HeaderMenu(props) {
    return (
      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <div className="text-md sm:flex-grow ml-5">
          <a href="#notice" className="block mt-4 sm:inline-block sm:mt-2 sm:text-lg text-teal-200 hover:text-white mr-4">
            お知らせ
          </a>
          <a href="#representative-dishes" className="block mt-4 sm:inline-block sm:mt-2 sm:text-lg text-teal-200 hover:text-white mr-4">
            お品書き
          </a>
          <a href="#media" className="block mt-4 sm:inline-block sm:mt-2 sm:text-lg text-teal-200 hover:text-white mr-4">
            メディア掲載情報
          </a>
          <a href="#restaurant" className="block mt-4 sm:inline-block sm:mt-2 sm:text-lg text-teal-200 hover:text-white">
            店舗情報
          </a>
        </div>
      </div>
    );
  }

  const url = 'https://asakura-shogetsu.github.io'
  const description = '福岡県朝倉市杷木にある「うなぎ料理 和食処 松月」です。創業80年余、和食と鰻の本格炭火焼を提供しております。和食全般に加え、創作料理、名物鰻の刺し身、洗い、肝の塩辛などの珍味もご用意しております。';

  return (
    <div>
      <Head>
        <title>{props.restaurantName} | 公式サイト</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="うなぎ,ウナギ,鰻,和食,松月,福岡,朝倉,杷木,定食,創作料理,うなぎの刺身,ランチ,昼食,夕食" />
        <meta name="description" content={description} />
        <meta name="thumbnail" content="img/thumbnail.jpg" />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={props.restaurantName + " HP"} />
        <meta property="og:title" content={props.restaurantName} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/ogp.png" />
        <meta name="twitter:image" content="/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="4mpKqxOyMuOED-kNzQgMb3Ejq7DgHxqbatWsW9dZp5Q" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N2ZWRGGYZ0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N2ZWRGGYZ0');`,
          }}
        />
      </Head>

      <nav className="flex justify-between sm:items-stretch sm:justify-start flex-wrap p-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="fill-current h-8 w-8 mr-2" width="32" height="32" src="img/logo_white.png" alt="ロゴ" />
          <span className="font-semibold text-lg xs:text-xl sm:text-2xl tracking-tight">{ props.restaurantName }</span>
        </div>

        <div className="hidden sm:block">
          <HeaderMenu />
        </div>

        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white" onClick={() => setMenuExpanded(!menuExpanded)}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>メニュー</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>

        {menuExpanded && <HeaderMenu />}
      </nav>
    </div>
  )
}
