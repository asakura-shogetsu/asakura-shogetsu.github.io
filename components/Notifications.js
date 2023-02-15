export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              3月の定休日は8（水）、15（水）、22（水）、27（月）になります。<br />
              うまかけん福岡、避密の旅の電子クーポンのみご利用いただけます。< br />
              蒸し雑煮・鰻しゃぶは、3月までの冬メニューです。ご来店の際は、ぜひご賞味ください。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              2月の定休日は1（水）、8（水）、15（水）、22（水）になります。
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
