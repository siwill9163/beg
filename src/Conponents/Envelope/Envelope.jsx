import React from 'react'
import './Envelope.css'
import hero_photo from '../../assets/hero_photo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Envelope = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "15d81bee-3d66-44de-8d97-8289de2785f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id='envelope' className='envelope'>
        <div className="envelope-title">
            <h1>Send a Brown Envelope</h1>
            <img src={hero_photo} alt="" />
        </div>
        <div className="enveo-connect-section">

            {}

            <form onSubmit={onSubmit} className='enveo-side'>

                <label htmlFor="">Brown Envelope Recipient</label>
                <input type="email" name="email" id="" placeholder='The person you want to email'/>

                <label htmlFor="">Subject</label>
                <input type="text" name="subject" id="" placeholder='Enter email subject' />

                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" rows="8" placeholder='Enter your message here'></textarea>

                <div className='btns'>
                  <button className='back-home'><AnchorLink className='anchor-link' offset={50} href='#home'>Home page</AnchorLink></button>
                  <button className='connect-submit' type='submit'>Send Email</button>
                  <button className='rules'><AnchorLink className='anchor-link' offset={50} href='#connect'>Chat with us</AnchorLink></button>
                </div>
                

            </form>

        </div>

    </div>
  )
}

export default Envelope