export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              4月の店休日は3（木）、9（水）、16（水）、24（木）、30（水）です。<br />
              冬限定の蒸し雑煮・鍋料理は3月で終了します。ありがとうございました。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              3月の店休日は24（月）夜（昼のみの営業）、25（火）です。<br />
              蒸し雑煮・鰻しゃぶは3月までの限定メニューです、よろしくお願いします。
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
