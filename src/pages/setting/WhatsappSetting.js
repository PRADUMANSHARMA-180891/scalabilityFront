import React, { useEffect, useState } from 'react'
import { PrivateAxios } from '../../environment/AxiosInstance'
import { WaringMessage } from '../../environment/ToastMessage'

function WhatsappSetting() {
  const [tab, setTab] = useState('')
  const [data, setData] = useState({
    type: tab,
    greenapi_instance_id: "",
    greenapi_apitoken_instance: "",
    maytapi_product_id: "",
    maytapi_phone_id: "",
    maytapi_api_token: ""
  })

  const getData = () => {
    PrivateAxios.get("get-whatsapp-setting")
      .then((res) => {
        setData({
          ...data,
          type: res.data.data.which_whatsapp,
          greenapi_instance_id: res.data.data.greenapi_instance_id,
          greenapi_apitoken_instance: res.data.data.greenapi_apitoken_instance,
          maytapi_product_id: res.data.data.maytapi_product_id,
          maytapi_phone_id: res.data.data.maytapi_phone_id,
          maytapi_api_token: res.data.data.maytapi_api_token,
        });
        setTab(res.data.data.which_whatsapp)
      }).catch((err) => {
        console.log(err);
      })
  }
  useEffect(() => {
    getData();

  }, [])

  const submit = (e) => {
    e.preventDefault();
    if (tab == "greenapi") {
      if (data.greenapi_instance_id == '' && data.greenapi_apitoken_instance == '') {
        WaringMessage("Please required field can not be null")
      }

    }
    if (tab == "Maytapi") {

    }

  }
  return (
    <div className="p-4">
      <div id="users_details_section">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">YOUR WHATSAPP</h3>
              </div>
              <div class="card-body">
                <div class="row">
                  <div class="col-md-12 col-sm-12 mb-12">
                    <label for="planned_date">Which One You Want To Used <span class="text-danger">*</span></label>
                    <select name="which_whatsapp" class="form-select" onChange={(e) => setTab(e.target.value)}>
                      <option value="greenapi" selected={tab == "greenapi"}>GREEN API</option>
                      <option value="Maytapi" selected={tab == "Maytapi"}>Maytapi</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="card card-info card-outline card-outline-tabs">
              <div class="card-header p-0 border-bottom-0">
                <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="custom-tabs-four-home-tab" data-bs-toggle="pill" href="#custom-tabs-four-home" role="tab" aria-controls="custom-tabs-four-home" aria-selected="true">{tab == "greenapi" ? "GREEN API" : "Maytapi"}</a>
                  </li>

                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content" id="custom-tabs-four-tabContent">
                  <div class="tab-pane fade active show" id="custom-tabs-four-home" role="tabpanel" aria-labelledby="custom-tabs-four-home-tab">
                    <div class="row">
                      <div class="col-12">
                        {tab == "greenapi" ?
                          <div class="card">
                            <div class="card-header">
                              <h3 class="card-title">WHATSAPP SETTINGS (GREENAPI)</h3>
                            </div>
                            <form >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-12 col-sm-12 mb-12">
                                    <label for="planned_date">IdInstance <span class="text-danger">*</span></label>
                                    <input type="text" name="greenapi_instance_id" value={data.greenapi_instance_id} class="form-control" onChange={(e) => setData({ ...data, greenapi_instance_id: e.target.value })} />

                                  </div>
                                  <div class="col-md-12 col-sm-12 mb-12">
                                    <label for="planned_date">ApiTokenInstance <span class="text-danger">*</span></label>
                                    <input type="text" name="greenapi_apitoken_instance" value={data.greenapi_apitoken_instance} class="form-control" onChange={(e) => setData({ ...data, greenapi_apitoken_instance: e.target.value })} />

                                  </div>
                                </div>
                              </div>
                              <div class="card-footer">
                                <div class="col-md-4 col-sm-12 mb-4">
                                  <button type="submit" name="submit_button" class="btn btn-md btn-primary float-start me-2">Update</button>
                                </div>
                                <div class="col-md-8 col-sm-12 mb-8"></div>
                              </div>
                            </form>
                          </div>
                          :
                          <div class="card">
                            <div class="card-header">
                              <h3 class="card-title">WHATSAPP SETTINGS (Maytapi)</h3>
                            </div>
                            <form >
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-12 col-sm-12 mb-12">
                                    <label for="planned_date">PRODUCT ID <span class="text-danger">*</span></label>
                                    <input type="text" name="maytapi_product_id" value={data.maytapi_product_id} class="form-control" required="required" onChange={(e) => setData({ ...data, maytapi_product_id: e.target.value })} />
                                  </div>
                                  <div class="col-md-12 col-sm-12 mb-12">
                                    <label for="planned_date">PHONE ID <span class="text-danger">*</span></label>
                                    <input type="text" name="maytapi_phone_id" value={data.maytapi_phone_id} class="form-control" required="required" onChange={(e) => setData({ ...data, maytapi_phone_id: e.target.value })} />
                                  </div>
                                  <div class="col-md-12 col-sm-12 mb-12">
                                    <label for="planned_date">API TOKEN <span class="text-danger">*</span></label>
                                    <input type="text" name="maytapi_api_token" value={data.maytapi_api_token} class="form-control" required="required" onChange={(e) => setData({ ...data, maytapi_api_token: e.target.value })} />

                                  </div>
                                </div>
                              </div>
                              <div class="card-footer">
                                <div class="col-md-4 col-sm-12 mb-4">
                                  <button type="submit" name="submit_button" class="btn btn-md btn-primary float-start me-2" onClick={submit}>Update</button>
                                </div>
                                <div class="col-md-8 col-sm-12 mb-8"></div>
                              </div>
                            </form>
                          </div>
                        }

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div >

      </div >
    </div >
  )
}

export default WhatsappSetting