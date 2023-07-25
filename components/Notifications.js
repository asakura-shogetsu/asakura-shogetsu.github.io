export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4">
              8月の定休日は3（木）、8（火）、15（火）、24（木）、30（水）、31（木）です（お盆期間中の定休日は15日のみです）。<br />
              朝倉振興券、朝倉ペイのご利用が可能です。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              7月の定休日は27（木）です。7月30日（日）は「土用の丑の日」です。スタッフ一同ご来店をお待ちしております。
            </li>
            <li className="border-dotted border-b-2 border-black my-4">
              メニュー・金額に一部変更がございます。ご確認ください。
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
