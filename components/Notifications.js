export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              12月の店休日は30（土）、31（日）です。<br />
              年末は12/29まで、年始は1/2からの営業となります。<br />
              1月の店休日は1（月）、8（月）、17（水）、18（木）、24（水）、31（水）です。<br />
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              ご来店の際は、お電話にて席の空き状況をお確かめください。状況次第でお待たせしてしまう場合がございます。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              鍋料理・蒸し雑煮をご提供中です、ぜひご賞味ください。<br />
              大将がバイク好きのため、バイクでお越しのお客様に限りコーヒー1杯無料サービスをしております、ぜひご来店お待ちしております。<br />
              朝倉振興券、朝倉ペイのご利用が可能です。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
