export default function Media() {
  function Card(props) {
    const pic = props.pic;
    const title = props.title;
    const description = props.description;

    return (
      <div className='full 2xl:w-1/3 lg:w-1/2 grid justify-items-center'>
        <p className="text-base">{description}</p>
        <div className="max-w-lg overflow-hidden border-solid border-2 border-white">
          <img className="w-full" src={pic} alt={title} />
        </div>
      </div>
    );
  }

  return (
    <div className="py-2">
      <div className='flex gap-y-8 justify-center flex-wrap p-4'>
        <Card
          pic="img/media/media1.jpg" title="メディア掲載_マツコの知らない世界" description="1/18放送「マツコの知らない世界」で当店の「蒸し雑煮」に紹介されました。" />
      </div>
    </div>
  )
}
