export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              新型コロナウイルス感染拡大等により、1/26〜2/20の営業時間は11〜20時まで・アルコールの提供は無しとなります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              2月の定休日は8（火）、17（木）、23（水）になります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              1/18放送「マツコの知らない世界」で紹介されました蒸し雑煮、3月までのご提供です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              あさくらペイのご利用が可能です。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
