export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              8月の店休日は7（水）、15（木）、21（水）、22（木）、28（水）です。<br />
              朝倉振興券・朝倉ペイ、利用可能です。皆様のご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              今年2回目の土用の丑の日は、8月5日（月）です。ご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              7月の店休日は31（水）です。
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
