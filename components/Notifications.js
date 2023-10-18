export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              11月の定休日は6（月）、15（水）、23（木）、29（水）です。<br />
              11月より、鍋料理・蒸し雑煮が始まります。<br />
              大将がバイク好きのため、バイクで来店されたお客様に限りコーヒー1杯無料サービスをしています。お気軽にお声掛けください。<br />
              朝倉振興券、朝倉ペイのご利用が可能です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              10月の定休日は22（日）、23（月）です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              7/31のももち浜ストアにて当店が紹介されました。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
