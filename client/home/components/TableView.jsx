import React, { Component } from 'react';
import toastr from 'toastr';

import WorkOrders from './WorkList.jsx';

class TableView extends Component {

getBadgeClass(status){

    console.log('>> ', status)

    if(status == 'Draft') {
      return 'draft-sts'
    }else if(status === 'Published') {
      return 'publish-sts'
    } else if (status === 'Routed') {
      return 'route-sts'
    } else if (status === 'Assigned') {
      return 'route-sts'
    }
    else  return 'draft-sts'
  }

renderDataList(){
    let tableviewList = WorkOrders.map((t,i)=>{
      return (
        <tr className="tr-col" key={t.id  } >
          <td>{t.title}</td>
          <td>{t.id}</td>
          <td>
            <div className={`fn-sts ${this.getBadgeClass(t.status)}`}>{t.status}</div>
          </td>
          <td>
            <p>{t.address1}</p>
            <p>{t.address2}</p>
          </td>
          <td>
            <p>${t.pay_amount}</p>
            <p>{t.pay_type}</p>
          </td>
          <td>
            <p>{t.service_date}</p>
            <p>{t.service_time}</p>
          </td>
        </tr>
    )
    })

    return tableviewList
  }

  render() {
    return (
      <div>
        <div className="table-scroll ptop5">
            <table className="table-striped table-bg mb3">
              <thead>
                <tr className="thead-bg">
                  <th>Title</th>
                  <th>Id</th>
                  <th className="txt-center">Status</th>
                  <th>Location</th>
                  <th>Pay</th>
                  <th>Date/Time</th>
                </tr>
              </thead>

              <tbody>
                {this.renderDataList()}
              </tbody>
            </table>
        </div>
      </div>
    );
  }
}

export default TableView;
