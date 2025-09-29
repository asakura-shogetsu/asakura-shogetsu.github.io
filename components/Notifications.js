export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              10月の店休日は1（水）、8（水）、14（火）の夜（昼のみ営業）、15（水）、23（木）、29（水）です。<br />朝倉振興券・朝倉ペイ・各種クレジット、ご利用可能です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4 text-red-500 font-bold">
              鰻の刺身・洗いは特別な処理が必要なため、予約をお願いします。
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
