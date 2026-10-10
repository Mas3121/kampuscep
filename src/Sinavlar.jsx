function Sinavlar({ sinavlar }) {
  return (
    <div>
        <h2>Sınavlar</h2>
        {sinavlar.map((sinav) => {
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
    </div>
    )
}

export default Sinavlar