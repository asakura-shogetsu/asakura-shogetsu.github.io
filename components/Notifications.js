export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              営業時間は11〜15時・17〜22時となります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              11月の定休日は4（木）、15（月）、29（月）になります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              筑前朝倉蒸し雑煮、始めました。11月〜3月の間のご提供です。
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
