export default function Restaurant() {
  return (
    <div className="mx-2 lg:mx-10 md:mx-5">
      <div className='flex gap-y-4 justify-center flex-wrap p-4'>
        <div className="full lg:w-1/2 md:w-full grid">
          <ul className="list-disc">
            <li className="mb-1">住所
              <ul>
                <li>〒838-1511 福岡県朝倉市杷木池田716-7</li>
              </ul>
            </li>
            <li className="mb-1">電話番号
              <ul>
                <li className="block sm:hidden"><a href="tel:0946-62-0381">0946-62-0381</a></li>
                <li className="hidden sm:block">0946-62-0381</li>
              </ul>
            </li>
            <li className="mb-1">アクセス
              <ul>
                <li>杷木ICから車で約2分</li>
                <li>杷木バスセンターから徒歩約3分</li>
              </ul>
            </li>
            <li className="mb-1">定休日
              <ul>
                <li>不定休</li>
              </ul>
            </li>
            <li className="mb-1">営業時間
              <ul>
                <li>11:30〜15:00 / 17:00〜22:00（ラストオーダー 21:30）</li>
              </ul>
            </li>
            <li className="mb-1">駐車場
              <ul>
                <li>有り</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-full xl:w-1/2 grid">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.355014596385!2d130.81029631557067!3d33.36179646124418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35416deb793f21c5%3A0xbd27783d9a2eeb58!2z5p2-5pyI!5e0!3m2!1sja!2sjp!4v1627391374231!5m2!1sja!2sjp" width="100%" height="450" allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </div>
  )
}