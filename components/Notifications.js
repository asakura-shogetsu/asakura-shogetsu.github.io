export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              お客様へ<br />
              大変恐縮ですが、物価高騰の折6月1日より商品の一部値上げを考えております。<br />
              どうぞ御理解の程、何卒よろしくお願いいたします。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              5月の店休日は28（木）です。<br />
              6月の店休日は3（水）の夜（昼のみ営業）、4（木）、10（水）、18（木）、24（水）の夜（昼のみ営業）、25（木）です。
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
