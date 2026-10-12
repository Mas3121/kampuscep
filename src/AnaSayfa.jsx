function AnaSayfa({ dersler , setAktifSayfa}) {
    const gunler = [
  "Pazar", "Pazartesi", "Salı", "Çarşamba",
  "Perşembe", "Cuma", "Cumartesi"
]

const bugun = gunler[new Date().getDay()]
const bugunkuDersler = dersler.filter((ders) => ders.gun === bugun)
    return (
        <div>
            <h2>Ana Sayfa</h2>
            <div className="ana-kartlar">
  <button
    className="ana-kart"
    onClick={() => setAktifSayfa("dersler")}
  >
    📅 Ders Programı
    <p>Haftalık derslerini görüntüle</p>
  </button>

  <button
    className="ana-kart"
    onClick={() => setAktifSayfa("sinavlar")}
  >
    🎓 Sınavlar
    <p>Yaklaşan sınavlarını görüntüle</p>
  </button>

  <button
    className="ana-kart"
    onClick={() => setAktifSayfa("duyurular")}
  >
    🔔 Duyurular
    <p>Son duyuruları görüntüle</p>
  </button>
            </div>
                 <div className="panel">
                    <h3>Bugünkü dersler</h3>
                    {bugunkuDersler.length === 0 ? (
                    <p>Bugün dersin yok 🎉</p>
                     ) : (
                     bugunkuDersler.map((ders) => (
          <div className="ders">
      <p>{ders.ders}</p>
      <p>{ders.baslangic} - {ders.bitis}</p>
    </div>
  ))
)}  
                    </div>
                    <div className="panel">
                    <h3>Yaklaşan sınavlar</h3>
                    </div>
                    <div className="panel">
                    <h3>Son duyurular</h3> 
                    </div>
            </div>
    )
}

export default AnaSayfa