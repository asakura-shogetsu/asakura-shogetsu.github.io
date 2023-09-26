export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              10月の定休日は3（火）、12（木）、22（日）、23（月）です。<br />
              朝倉振興券、朝倉ペイのご利用が可能です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              大将がバイク好きのため、バイクで来店されたお客様に限りコーヒー1杯サービスを始めました。お気軽にお声掛けください。
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
