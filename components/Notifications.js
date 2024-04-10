export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              5月の店休日は7（火）、8（水）、16（木）、22（水）、29（水）です。<br />
              ゴールデンウィーク中は休まずに営業いたします。クレジット払い・スマホ決済可能です。皆様のご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              4月の店休日は11（木）、17（水）の夜、18（木）、25（木）です。<br />
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
