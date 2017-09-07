import React, { Component } from 'react';
import toastr from 'toastr';

import WorkOrders from './WorkList.jsx';

class GridView extends Component {

  renderCardList(){
      let cardviewList = WorkOrders.map((c,i)=>{
        return (
          <div key={c.id} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 fn_cardview fn-dualcard">
            <div className="fn-card fn-card_bs fnc" >
              <div className="fnc_pro">
                <div className="fnc_full pad1">
                  <p className="fn-title pb1">
                    {c.title}
                  </p>
                  <p className="fn-st">id:</p>
                  <p className="fn-id fn-des pb1">{c.id}</p>
                  <p className="fn-st">Status:</p>
                  <p className="fn-status fn-des pb1">{c.status}</p>
                  <p className="fn-st">Address:</p>
                  <p className="fn-address1 fn-des">{c.address1}</p>
                  <p className="fn-address2 fn-des pb1">{c.address2}</p>
                  <p className="fn-st">Pay:</p>
                  <p className="pb1"><span className="fn-pay_amount fn-des"><span>$</span>{c.pay_amount}</span>&nbsp;<span className="fn-pay_type fn-des">{c.pay_type}</span></p>
                  <p className="fn-st">Service Date:</p>
                  <p className="fn-service_date fn-des">{c.service_date}</p>
                  <p className="fn-service_time fn-des">{c.service_time}</p>
                </div>
              </div>
            </div>
          </div>
        )
      })
      return cardviewList
    }


  render() {
    return (
      <div>
        <div className="row">
          {this.renderCardList()}
        </div>
      </div>
    );
  }
}


export default GridView;
