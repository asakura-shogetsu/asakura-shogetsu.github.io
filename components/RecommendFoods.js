export default function RecommendFoods() {
  function Card(props) {
    const pic = props.pic;
    const title = props.title;
    const price = props.price;
    const description = props.description;

    return (
      <div className='full 2xl:w-1/3 lg:w-1/2 grid justify-items-center'>
        <div className="max-w-lg rounded-lg overflow-hidden border-double border-4 border-yellow-200 border-opacity-25">
          <img className="w-full" src={pic} alt={title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}<span className="float-right">{price}</span></div>
            <p className="text-gray-300 text-base">{description}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-5 text-center">お品書き</h2>
      <p className="text-center">
        ※表示価格は税込みです。<br />
        ※季節により写真と内容が変わる事があります。
      </p>
      <div className='flex gap-y-8 justify-center flex-wrap p-4'>

        <Card
          pic="img/food/food1.jpg"
          title="うなぎ定食 <松>"
          price="2,640円"
          description="カリッと焼き目のついたうなぎの蒲焼きをご堪能ください。" />
        <Card
          pic="img/food/food2.jpg"
          title="セイロ蒸し <松>"
          price="2,200円"
          description="うなぎの蒲焼きと錦糸卵をタレに絡めたご飯の上に乗せて蒸し上げました。" />
        <Card
          pic="img/food/food3.jpg"
          title="うな丼"
          price="1,650円"
          description="うなぎの蒲焼きとタレの絡んだご飯。山芋との食感もお楽しみください。" />
        <Card
          pic="img/food/food4.jpg"
          title="うなぎの刺身"
          price="3,300円"
          description="当店人気の珍味とも言える刺身。フグの食感にも似た脂ののった味が好評です。" />
        <Card
          pic="img/food/food6.jpg"
          title="刺身定食"
          price="1,650円"
          description="刺身盛り・小鉢2品・お吸物・白飯・香の物" />
        <Card
          pic="img/food/food5.jpg"
          title="会席料理"
          price="3850円"
          description="お祝い・法要等の会席料理もご予約承ります。四季折々の旬の食材をお楽しみください。" />

      </div>
    </div>
  )
}
