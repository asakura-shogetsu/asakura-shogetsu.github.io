export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              9月の定休日は8（水）、15（水）、21（火）、27（月）になります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              新型コロナウイルス感染症拡大防止のため、8月20日〜9月12日の間、酒類の提供は出来ません。また、営業時間は11〜15時・17〜20時となります。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              2021年9月4日、ホームページを公開しました。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
