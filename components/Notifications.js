export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              12月の店休日は2（火）の夜（昼のみ営業）、3（水）の昼（夜のみ営業）、11（木）、17（水）の夜（昼のみ営業）、24（水）、30（火）、31（水）です。<br />蒸し雑煮・鰻しゃぶが美味しい季節になりました。新年会受け付けておりますので、よろしくお願いいたします。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              物価高騰のため、鍋料理の値段をやむを得ず1割値上げさせていただきます。大変ご迷惑をお掛けいたしますが、ご理解いただきますようお願いいたします。
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
