import React, { Component } from "react";
import Json from './reviews.json'
import TextEditor from './components/textEditor'
import prettier from "prettier/standalone";
import babylon from "prettier/parser-babel";




class App extends Component{

 html = `<div align="left" style="padding-top: 30px;">
  <p><strong><em>"Thank you for the speedy service and great product which performed very well."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">JimTCon</span> - 8/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Downloaded software without a hitch and had it up and running in about 35 mins. Great deal."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">John Heron</span> - 8/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Goods arrived early and the instructions were easy to follow I downloaded the program and installed it within minutes. Excellent Service highly recommended"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">John Waite</span> - 8/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"First class service with quality item"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Ted Edward Gasson</span> - 7/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"PERFECT FOR HOME LIGHT USE WITH A FULL SET OF TOOLS, EXCELLENT VALUE, "</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">jasperparot</span> - 7/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Excellent product and service."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Super Steve</span> - 7/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"I hesitated before purchasing. However, the License Key and instructions arrived promptly by email and the installation went according to plan."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Andy G</span> - 6/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"First & foremost this was the best value I could find on the web. It comes as a link with excellent instructions (including a video) to install the software which even I was able to follow. All communications with the customer support have been efficient & friendly. Highly recommended."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">J-P</span> - 6/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Item arrived in a few hours, installed and activated within 40 minutes of arrival. Have bought before, will buy again."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">bookscass</span> - 6/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Thanks a lot, great product and fast response."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Topman</span> - 5/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Excellent, product arrived really quickly, and worked no problem, great communication from the Company throughout. Recommended"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Pedro Lopes</span> - 5/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Key code and well written instructions arrived promptly."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Mike Aldwinckle</span> - 5/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Arrive in very good time."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Davis</span> - 4/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Good Company, easy to deal with. Would recommend."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Mark B.</span> - 4/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"very pleased with the speed of service and the product, having previously (almost!) been scammed by a supplier on another site. This guy is great!"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Blackpoolnurse</span> - 4/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Download the software from the Microsoft website and use the supplied key to unlock, simple and effective."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">D. Catterall</span> - 3/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Download and installation took about 10 mins. Key worked fine, all apps activated. No problems so far."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Alexander</span> - 3/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Excellent supplier and product work well. Had a few Outlook issues where I got some excellent support. Would use again."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Supraman</span> - 3/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em> "Excellent product. Quick delivery and great service. Very easy to install and worked straight away 5/5."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Wilo Lord</span> - 2/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Fabulous customer service would use again"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Stoke-on-Trent</span> - 2/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Remarkably good price. No problems with installation using the product key supplied"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Florence</span> - 2/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Basically does what it said on the tin , quick easy installation and working with no problems A+++"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Donna Mark</span> - 1/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Good price and excellent customer service."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">RDM</span> - 1/10/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"I had problems with the install to begin with thinking I knew what I was doing. Please follow the instructions fully by watching the video and reading the entire email instructions. By following the clear instructions you will save yourself a lot of time. Thanks"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Chi Tang</span> - 1/10/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em> "Very speedy service; would be happy to use again"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">
  Jonathan P.
  </span> - 30/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Due to hardware issues, after downloading this suite my laptop was wiped. They provided me another code within 1 hours of emailing them on a Sunday! Exceptional customer service and put me before the money. Very, very pleased."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Harry B.</span> - 30/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em> "Prompt delivery and excellent help and service form the seller."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">
  Joshua
  </span> - 30/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Excellent service Activated no problems very happy thanks"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">P.Craddock</span> - 29/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Uninstalled the office that was on my new laptop, downloaded from the link in the email received, installed it added the serial number also and worked fine. Excellent product and easy to follow instructions. Thanks very much"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">PaulGT</span> - 29/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"First & foremost this was the best value I could find on the web. It comes as a link with excellent instructions (including a video) to install the software which even I was able to follow. All communications with the customer support have been efficient & friendly. Highly recommended."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Philip Goddard</span> - 29/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"I would just like to thank the supplier for the very quick response thanks very much, the service was excellent"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Mr M.</span> - 28/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"worth the price"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">peter Beswick</span> - 28/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"quick delivery"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;"> steady </span> - 28/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Does what it says the tin !!"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;"> Pauline </span> - 27/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Due to hardware issues, after downloading this suite my laptop was wiped. They provided me another code within 1 hours of emailing them on a Sunday! Exceptional customer service and put me before the money. Very, very pleased."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">motiur</span> - 27/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"worth the price"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Richard Clark</span> - 27/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Great service thanks again."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Jeff</span> - 26/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Works a treat. No trouble installing. Would recommend"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">A.H. John</span> - 26/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"It's refreshing to see so obviously enthusiastic about their product, who goes the extra mile if things go wrong. Please have no doubt, your money is safe with them. Thanks"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Gerry</span> - 26/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em> "As described"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">
  Al West
  </span> - 25/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em>"Quick easy transaction arrived promptly with easy to follow instructions all working. Bought another as so easy for first purchase and worked perfectly."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Julia</span> - 25/9/2021</div>
  </div>
  <div align="right" style="padding-top: 30px;">
  <p><strong><em>"Good price, received email with instructions and key code, easy to install and worked a treat"</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;">Richard B.</span> - 25/9/2021</div>
  </div>
  <div align="left" style="padding-top: 30px;">
  <p><strong><em> "Key was emailed very quickly and worked first time unlike 2 others I bought."</em></strong></p>
  <div><span style="color: #f15a24; font-weight: bold;"> N. Williamson </span> - 24/9/2021</div>
  </div>`


  state = {
    html : this.html,
    formattedCode : ""
  }



  updateChanges = (changes)=>{
    const formattedCode = prettier.format(`<>${changes}</>`, {
      parser: "babel",
      plugins: [babylon]
    });
this.setState({
  html : changes,
  formattedCode
})
  };

  render(){
    return(
    <div>
      <div>
      < TextEditor html = {this.state.html} updateChanges = {this.updateChanges} formatCode ={this.formatCode}/>
      </div>
      <div style={{ width: '50%', height: '300px', margin :'3em auto', padding : '3em' }}>

      </div>
      <textarea style={{ width: '50%', height: '300px', margin :'auto' }} value={this.state.formattedCode}></textarea>
      
    </div>

)}
};

export default App;