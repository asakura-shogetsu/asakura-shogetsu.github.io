export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              6月の店休日は5（水）午後（昼のみ営業）、6（木）、12（水）、19（水）、27（木）です。<br />
              クレジット払い・スマホ決済可能です。皆様のご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              5月の店休日は22（水）、29（水）です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              ご来店の際は、お電話にて席の空き状況をお確かめください。状況次第でお待たせしてしまう場合がございます。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              大将がバイク好きのため、バイクでお越しのお客様に限りコーヒー1杯無料サービスをしております、ぜひご来店お待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              冬限定の鍋料理・蒸し雑煮は3月で終了しました。次回は11月からです。よろしくお願いします。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
