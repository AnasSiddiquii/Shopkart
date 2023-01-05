const Card = () => {
    return (
<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="col-md-10 m-auto">
                <div className="card willFlip" id="willFlip">
                    <div className="front">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <img src="./assets/card_bank.png" width="50" style={{filter: "contrast(0)"}} height="50" alt="" />
                                <img src="./assets/visa.png" width="50" height="50" alt="" />
                            </div>
                            <div className="col-md-12 mt-1">
                                <div className="form-group">
                                    <label for="cardNumber"></label>
                                    <input type="text" className="form-control animate__animated animate__bounce animate__duration-2s" disabled readonly id="cardNumber" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between bd-highlight mb-3">
                                <div className="col-md-6 card-holder-content">
                                    <div className="form-group">
                                        <label for="cardHolderValue">Card Holder</label>
                                        <input type="text" placeholder="FULL NAME" disabled className="cardHolder form-control animate__animated animate__bounce animate__duration-2s" id="cardHolderValue" />
                                    </div>
                                </div>
                                <div className="col-md-3 card-expires-content">
                                    <div className="input-date">
                                        <label for="expiredMonth" className="text-right d-block">Expires</label>
                                        <div className="row content-date-input justify-content-end animate__animated animate__duration-2s animate__bounce">
                                            <input type="text" disabled className="cardHolder col-4 form-control" id="expiredMonth" />
                                            <h4 className="mt-1 p-2 slash-text"> / </h4>
                                            <input type="text" disabled className="cardHolder col-4 form-control" id="expiredYear" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="card-bar"></div>
                        <div className="card-body">
                            <div className="col-md-12  back-middle">
                                <div className="form-group">
                                    <label for="cardCcv" className="text-right d-block">CW</label>
                                    <input type="password" disabled className="form-control" id="cardCcv" />
                                </div>
                                <img src="./assets/visa.png" className="float-right" width="50" height="50" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body mt-5">
                    <div className="form-group">
                        <label for="cardInput">Cards Number</label>
                        <input required className="input card-input_field form-control" id="cardInput" />
                    </div>
                    <div className="form-group">
                        <label for="cardHolder">Cards Holders</label>
                        <input required className="card-input_field form-control" id="cardHolder" />
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="monthInput">Expiration Date</label>
                                <select required name="" className="form-control card-input_field" id="monthInput">
                                    <option className="disabled" readonly>Month</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="yearInput"></label>
                                <select required name="" className="form-control card-input_field mt-2" id="yearInput">
                                    <option className="disabled" readonly>Year</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label for="cwInput">CW</label>
                                <input required type="text" className="form-control card-input_field" id="cwInput" />
                            </div>
                        </div>
                    </div>
                    {/* eslint-disable-next-line */}
                    <a href="" className="click">
                        <div className="btn btn-primary d-block card-input_button w-100" onClick={()=>alert("Request Sent")} >Submit</div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}

export default Card