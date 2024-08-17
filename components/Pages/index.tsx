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


  return (
    <div style={{ direction: "rtl", minHeight: "11vh", }}>
      <br-x />
      <Window title={" Meteorology of Shiraz "} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" }}>

        <br-xx />

        <div style={{
          width: "100%", height: 48, backgroundColor: "#577D7C", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
          Weather : {(props.weather.hourly[0].weatherDesc[0].value ).toLocaleString("en-us")} -

        </div>

        <br-x />

        <div style={{
          width: "100%", height: 48, backgroundColor: "#577D7C", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
          Temperature C : {(props.current_condition.FeelsLikeC ).toLocaleString("en-us")} -

        </div>

        <br-x />

        <div style={{
          width: "100%", height: 48, backgroundColor: "#577D7c", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
          Temperature F : {(props.current_condition.FeelsLikeF ).toLocaleString("en-us")} -

        </div>

        <br-x />

        <div style={{
          width: "100%", height: 48, backgroundColor: "#577D7C", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
          Humidity : {(props.current_condition.humidity ).toLocaleString("en-us")} -

        </div>

        <br-x />


        <div style={{
          width: "100%", height: 48, backgroundColor: "#577D7C", borderRadius: 10,
          textAlign: "center"
        }}>
          <br-x />
          <br-xx />
          Cloudcover : {(props.current_condition.cloudcover ).toLocaleString("en-us")} -

        </div>

        <br-x />




        <center style={{ fontSize: 10 }}>
          تیم پژوهشی تورینگ (باگولوژی)
        </center>

      </Window>

    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let res = await fetch("https://irmapserver.ir/research/api/weather/")
  let data = await res.json()
  let current_condition = data.current_condition[0]
  let nearest_area = data.nearest_area[0]
  let weather = data.weather[0]





  return {
    props: {
      data: global.QSON.stringify({
        current_condition, nearest_area, weather,
        session,
        // nlangs,
      })
    },
  }
}