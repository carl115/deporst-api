function Card({ deport }) {
    return (
        <div className="col-md-6 d-flex justify-content-center my-3">
            <div className="card w-75">
                <img 
                    src={deport.strSportThumb} 
                    alt={deport.strSport} 
                    className="card-img-top" 
                />
                <div className="card-body d-flex justify-content-around align-items-center">
                    <strong>{deport.strSport}</strong>
                    <img src={deport.strSportIconGreen} alt={deport.strSport} />
                </div>
            </div>
        </div>
    );
}

export default Card