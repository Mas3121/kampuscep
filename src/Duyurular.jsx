function Duyurular({ duyurular }) {
  return (
    <div>
      <h2>Duyurular</h2>

      {duyurular.map((duyuru) => {
        const tarih = new Date(duyuru.tarih)
        const ay = tarih.getMonth()

        const aylar = [
          "Ocak", "Şubat", "Mart", "Nisan",
          "Mayıs", "Haziran", "Temmuz", "Ağustos",
          "Eylül", "Ekim", "Kasım", "Aralık"
        ]

        const ayAdi = aylar[ay]

        return (
          <div className="duyuru">
            <p className="duyuru-baslik">{duyuru.baslik}</p>
            <p>{tarih.getDate()} {ayAdi}</p>
            <p>{duyuru.aciklama}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Duyurular