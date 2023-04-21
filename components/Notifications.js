export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              5月の定休日は1（月）、11（木）、17（水）、25（木）です。<br />
              うまかけん福岡、避密の旅の電子クーポンのみご利用いただけます。テイクアウトもお尋ねください。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              4月の定休日は21（金）、26（水）です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              メニュー・金額に一部変更がございます。ご確認ください。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              当店は福岡県 感染防止認証店です。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
