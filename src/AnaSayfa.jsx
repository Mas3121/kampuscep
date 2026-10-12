function AnaSayfa({ dersler }) {
    const gunler = [
  "Pazar", "Pazartesi", "Salı", "Çarşamba",
  "Perşembe", "Cuma", "Cumartesi"
]

const bugun = gunler[new Date().getDay()]
    return (
        <div>
            <h2>Ana Sayfa</h2>
                <div className="panel">
                    <h3>Bugünkü dersler</h3>
                    {dersler.filter((ders) => ders.gun === bugun).map((ders) => {
    return (
        <div className="ders">
            <p>{ders.ders}</p>
            <p>{ders.saat}</p>
            <p>{ders.yer}</p>
        </div>
    )
})}
                    {dersler.map((ders) => {
                        return (
                            <div className="ders">
                                <p>{ders.ders}</p>
                                <p>{ders.saat}</p>
                                <p>{ders.yer}</p>
                            </div>
                        )
                    })}
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