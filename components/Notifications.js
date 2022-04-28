export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              5月の定休日は9（月）、10（火）、18（水）、30（月）になります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              蒸し雑煮・鰻しゃぶは3月末で終了いたしました。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              当店は福岡県 感染防止認証店です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              <a href="#media" className="text-black">1/18放送「マツコの知らない世界」で紹介されました蒸し雑煮、3月までのご提供です。</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
