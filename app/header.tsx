import Nav from './nav'

export default function Header() {
  return (
    <div className="grid grid-cols-4 gap-20 place-content-center">
      <Nav url="/servertime" name="서버 시간 계산기"/>
      <Nav url="/" name="준노 초..."/>
      <Nav url="/" name="준노 중..."/>
      <Nav url="/" name="준노 고..."/>
    </div>
  )
}