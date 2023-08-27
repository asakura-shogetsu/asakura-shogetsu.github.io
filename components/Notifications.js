export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              8/1以降、食材・仕入れの値上げにより値上げをしております。ご迷惑をおかけ致しますが、ご来店時・電話にて料金の確認をお願いします（本ページの料金は追って修正予定です）。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              9月の定休日は、6（水）、13（水）、17（日）、25（月）です。<br />
              朝倉振興券、朝倉ペイのご利用が可能です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              8月の定休日は、30（水）、31（木）です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              7/30のももち浜ストアにて当店が紹介されました。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              メニュー・金額に一部変更がございます。ご確認ください。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
