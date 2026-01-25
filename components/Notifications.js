export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              1月の店休日は28（水）です。2月の店休日は5（木）、12（木）、18（水）、26（木）です。<br />
              蒸し雑煮・鰻しゃぶが美味しい季節です、よろしくお願いいたします。
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
