export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              9月の定休日は7（水）、12（月）、21（水）、26（月）になります。<br />
              9月以降、うなぎ料理を値上げさせていただいております、ご了承ください。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              蒸し雑煮・鰻しゃぶは3月末で終了いたしました。
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
