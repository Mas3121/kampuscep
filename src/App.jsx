import './App.css'
function App() {
  const dersler = [
  { gun: "Pazartesi",
    ders: "Devreler ve Elektronik",
    baslangic: "13.30",
    bitis: "15.50",
  },
  {
    gun: "Pazartesi",
    ders: "Devreler ve Elektronik LAB",
    baslangic: "16.00",
    bitis: "17.30",
  },
  {
    gun: "Salı",
    ders: "Bilgisayar Bilimleri İçin Ayrık Matematik",
    baslangic: "08:30",
    bitis: "10:50",
  },
  {
  gun: "Salı",
  ders: "Diferansiyel Denklemler",
  baslangic: "11:00",
  bitis: "12:30"
},
{
  gun: "Çarşamba",
  ders: "Diferansiyel Denklemler",
  baslangic: "13:30",
  bitis: "15:00"
},
{
  gun: "Çarşamba",
  ders: "Theory of Computation",
  baslangic: "15:10",
  bitis: "17:30"
},
{
  gun: "Perşembe",
  ders: "Nesne Yönelimli Programlama",
  baslangic: "10:30",
  bitis: "12:30"
},
{
  gun: "Perşembe",
  ders: "Lineer Cebir",
  baslangic: "13:30",
  bitis: "15:50"
},
{
  gun: "Cuma",
  ders: "Nesne Yönelimli Programlama LAB",
  baslangic: "11:00",
  bitis: "12:30"
},
]
const sinavlar = [
{
  ders: "Devreler ve Elektronik",
  tarih: "2026-10-15",
  saat: "10.00",
  yer: "101"
},
{
  ders: "Diferansiyel Denklemler",
  tarih: "2026-10-18",
  saat: "10.00",
  yer: "105"
},
]
const duyurular = [
  {
    baslik: "Bilgisayar Mühendisliği Bölüm Duyurusu",
    tarih: "2026-10-04",
    aciklama: "Yeni duyuru yayınlandı"
  },
]
const gelecekSinavlar = sinavlar.filter((sinav) => new Date(sinav.tarih) >= new Date())
gelecekSinavlar.sort((a,b) => new Date(a.tarih) - new Date(b.tarih))
    
  return (
    <div>
      <h1>KampüsCep</h1>
      <p>Üniversite hayatını tek yerde takip et.</p>
      <h2>Sınavlar</h2>
      {gelecekSinavlar.map((sinav) => {
         const tarih = new Date(sinav.tarih)
         const bugun = new Date()
         bugun.setHours(0,0,0,0)
         const kalan = tarih - bugun
         const KalanGun = kalan / (24 * 60 * 60 * 1000)
         const tamGun = Math.floor(KalanGun)
         let kalanYazi = tamGun + " gün kaldı"
         if (tamGun === 1) {
          kalanYazi = "Yarın"
         }
         if (tamGun === 0) {
          kalanYazi = "Bugün"
        }
         const ay = tarih.getMonth()
         const aylar = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
]
         const ayAdi = aylar[ay]
         return (
<div className="sinav">
          <p className="ders">{sinav.ders}</p>
          <p style={{ color: "#666", fontSize:"14px"}}>{tarih.getDate()} {ayAdi} - {sinav.saat} - {kalanYazi}</p>
          <p style={{ color: "#666", fontSize: "14px"}}> Derslik: {sinav.yer}</p>
        </div>
         )
})}
        <h2>Duyurular</h2>
        {duyurular.map((duyuru) => {
          const tarih = new Date(duyuru.tarih)

          return (
            <div className="duyuru">
          
        
            <p className="duyuru-baslik">{duyuru.baslik}</p>
            <p>{duyuru.tarih}</p>
            <p>{duyuru.aciklama}</p>
          </div>
  )
})}
      {["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"].map((gun) => (
        <div className="gun">
          <h2>{gun}</h2>
          {dersler
          .filter((ders) => ders.gun == gun)
          .map((ders) => (
      <div>
      <p className="ders">{ders.ders}</p>
      </div>
      ))}
    </div>
  ))}
  </div>
  )
}

export default App