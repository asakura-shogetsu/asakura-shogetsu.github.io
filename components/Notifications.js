export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              12月の定休日は10（土）、21（水）、30（金）、31（土）になります。<br />
              7（水）、14（水）は昼のみの営業となります<br />
              お正月は1/2から営業いたします。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              11月以降、蒸し雑煮・鰻しゃぶ・その他鍋ものを始めました。
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
