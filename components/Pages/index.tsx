import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  let name = "خوش آمدید"


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={name} style={{
        minHeight: 200, margin: 10, width: "calc(100% - 20px)",
        backgroundImage: "url('https://asdownload.net/wallpaper/web/wallpapers/478/thumbnail/lg.jpg ')", backgroundSize: "cover",
        height: "90vh"
      }}>
        {/* https://th.bing.com/th/id/R.4e60946dbe669736d8fe1e8e26cc7c8c?rik=jzpIFi4We3BIsg&pid=ImgRaw&r=0                    */}
        <br-x />
        <br-x />
        <c-x>
          <f-25 style={{ color: "lightgrey", fontFamily: "serif", fontSize: "40pt", marginTop: "20px", marginLeft: 22 }}>Weather</f-25>
          <br />

          <br />
          <br /> <br /> <br /> <br /><br /><br />
        </c-x>
        <f-cse>
          <c-cse style={{ padding: "5px", borderRadius: "5px", boxShadow: "5px 5px 5px dimgray", backgroundColor: "lab(100 0 -0.03 / 0.19)", width: "220px", height: "100px", marginBottom: "80px" }}>
            <div style={{ display: "flex" }}>
              <svg style={{ marginTop: "30px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="maroon"><path d="M520-520v-80h200v80H520Zm0-160v-80h320v80H520ZM320-120q-83 0-141.5-58.5T120-320q0-48 21-89.5t59-70.5v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q38 29 59 70.5t21 89.5q0 83-58.5 141.5T320-120ZM200-320h240q0-29-12.5-54T392-416l-32-24v-280q0-17-11.5-28.5T320-760q-17 0-28.5 11.5T280-720v280l-32 24q-23 17-35.5 42T200-320Z" /></svg>
              <p style={{ fontSize: "20px", marginTop: "30px", color: "lightgrey", fontFamily: "serif", paddingLeft: "0px" }}>Feels like: 20<sup>°</sup>C</p>
            </div>
          </c-cse>
          <c-cse style={{ padding: "5px", borderRadius: "5px", boxShadow: "5px 5px 5px dimgray", backgroundColor: "lab(100 0 -0.03 / 0.19)", width: "200px", height: "100px", marginBottom: "80px" }}>
            <div style={{ display: "flex" }}>
              <svg style={{ marginTop: "30px" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0000F5"><path d="M491-200q12-1 20.5-9.5T520-230q0-14-9-22.5t-23-7.5q-41 3-87-22.5T343-375q-2-11-10.5-18t-19.5-7q-14 0-23 10.5t-6 24.5q17 91 80 130t127 35ZM480-80q-137 0-228.5-94T160-408q0-100 79.5-217.5T480-880q161 137 240.5 254.5T800-408q0 140-91.5 234T480-80Zm0-80q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-320Z" /></svg>

              <p style={{ fontSize: "20px", marginTop: "30px", color: "lightgrey", fontFamily: "serif", paddingLeft: "5px" }}> Humidity: 50% </p>
            </div>
          </c-cse>

        </f-cse>




        <br /> <br /> <br /> <br /> <br /><br /><br />
        <f-cc>
          <f-20 style={{ color: "lightgrey", fontFamily: "serif" }}> Turing <sub></sub></f-20>
        </f-cc>


      </Window>
    </div >
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;


  return {
    props: {
      data: global.QSON.stringify({
        session,
        // nlangs,
      })
    },
  }
}