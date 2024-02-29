export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              3月の店休日は7（木）、14（木）、20（水）、21（木）、27（水）です。冬限定の鍋料理・蒸し雑煮は3月で終了します。次回は11月からです。よろしくお願いします。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              ご来店の際は、お電話にて席の空き状況をお確かめください。状況次第でお待たせしてしまう場合がございます。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              鍋料理・蒸し雑煮をご提供中です、ぜひご賞味ください。<br />
              大将がバイク好きのため、バイクでお越しのお客様に限りコーヒー1杯無料サービスをしております、ぜひご来店お待ちしております。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
