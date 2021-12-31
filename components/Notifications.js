export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              本年も大変お世話になりました。年末年始は12/31・1/1の2日間、休業いたします。その他、1月の定休日は19（水）、26（水）、27（木）になります。クーポン各種ご利用できます。
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
