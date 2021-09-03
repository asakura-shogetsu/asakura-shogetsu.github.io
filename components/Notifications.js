export default function Notifications() {
  return (
    <div className="px-2 py-6">
      <h2 className="text-2xl font-semibold text-center">お知らせ</h2>
      <div className='flex justify-center flex-wrap'>
        <div className='notifications-box w-full lg:w-1/2'>
          <ul className="list-none px-4 py-2">
            <li className="border-dotted border-b-2 border-black my-4"><span className="float-left mr-5">2021年9月4日</span>ホームページを公開しました。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
