export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              うなぎの仕入れ価格高騰のため、9月1日より一部メニューの値上げをさせて頂きます。お客様にはご迷惑をお掛けいたしますが、何卒よろしくお願いいたします。<br />
              金額の詳細は、<a href="#representative-dishes" className="text-black">お品書き</a>にてご確認ください。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              9月の店休日は4（水）、11（水）、19（木）、25（水）です。<br />
              朝倉振興券・朝倉ペイ、利用可能です。皆様のご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              8月の店休日は28（水）です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              <a href="#media" className="text-black">雑誌「ソワニエ+ vol.86 2024年7・8月号」に当店が紹介されております。ぜひご覧ください。</a>
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              ご来店の際は、お電話にて席の空き状況をお確かめください。状況次第でお待たせしてしまう場合がございます。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              大将がバイク好きのため、バイクでお越しのお客様に限りコーヒー1杯無料サービスをしております、ぜひご来店お待ちしております。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
