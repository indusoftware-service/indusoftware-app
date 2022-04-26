<template>
  <div :style="image">
    <main id="home" class="w-100">
      <!-- BANNER -->
      <div class="d-flex justify-content-center align-self-center">
        <div class="w-75">
          <div
            class="
              row
              d-flex
              flex-column flex-sm-column flex-md-row flex-lg-row flex-xl-row
              justify-content-center
              align-items-center
              my-7
            "
          >
            <div
              class="
                p-0
                col-12 col-sm-10 col-md-5 col-lg-5
                h-100
                d-flex
                flex-column
                align-items-center align-items-sm-center align-items-md-start
              "
            ></div>
            <div class="container-fluid">
              <div class="w-100 p-3">
                <div class="div-form">
                  <div class="col-12 col-lg-6 p-4 tx-size text-white">
                    <div class="pb-4" >
                        <img
                        src="/images/logoIndu.png"
                        width="180"
                        height="48"
                        class="d-inline-block"
                        alt="induLogo"
                        /> 
                    </div>
                    <h2
                      class="text-center text-md-left text-lg-left text-xl-left"
                    >
                      Does your company require you to improve your logistics
                      performance, but you can't find enough technical resources
                      in the market to carry this out?
                      <br />
                      <br />
                      Is budget an issue, and you need expert talents with
                      convenient costs?
                    </h2>
                  </div>
                  <div
                    class="
                      col-12 col-lg-6
                      d-flex
                      justify-content-center
                      align-items-center
                      text-white
                      pt-4
                    "
                  >
                    <form
                      name="contact"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      method="POST"
                      class="requires-validation"
                      novalidate
                    >
                      <input type="hidden" name="form-name" value="contact" />

                      <h2
                        class="
                          text-center text-md-left text-lg-left text-xl-left
                        "
                      >
                      
                        <span class="subtitle-bar"
                          >Contact Us and  Meet the Team</span
                        >
                      </h2>
                      <div>
                        <label for="" class="mt-3">Your Name</label>
                        <input
                          type="text"
                          class="form-control mb-3"
                          placeholder="Name"
                          aria-label="Name"
                          name="name"
                          required
                        />
                        <div class="invalid-feedback">
                          Name field cannot be blank
                        </div>
                      </div>
                      <div>
                        <label for="">Your Email</label>
                        <input
                          type="email"
                          class="form-control mb-3"
                          placeholder="Email"
                          aria-label="Email"
                          name="email"
                          required
                        />
                        <div class="invalid-feedback">
                          Email field cannot be blank
                        </div>
                      </div>
                      <div>
                        <label for="">Leave a Message</label>
                        <textarea
                          class="form-control mb-3"
                          rows="3"
                          placeholder="Enter your message"
                          style="resize: none"
                          name="message"
                          required
                        ></textarea>
                        <div class="invalid-feedback mb-3">
                          Message field cannot be blank
                        </div>
                      </div>
                      <button
                        type="submit"
                        class="btn btn-outline-light btn-lg w-100 mb-3"
                      >
                        Send
                      </button>
                    </form>
                  </div>

                  <div
                    class="
                      p-4
                      col-12
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div
                      id="skills"
                      class="
                        w-100
                        container-fluid
                        d-flex
                        justify-content-center
                      "
                    >
                      <div
                        class="
                          w-75
                          d-flex
                          flex-column
                          align-items-center align-items-md-start
                        "
                      >
                        <div class="w-100">
                          <h3
                            class="
                              text-center
                              text-md-left
                              text-lg-left
                              text-xl-left
                              text-white
                            "
                          >
                            Our Skills
                          </h3>
                        </div>
                        <div class="underscore_logistic"></div>
                        <div
                          class="
                            d-flex
                            pt-4
                            px-0 px-md-4 px-lg-4
                            w-100
                            row
                            justify-content-between
                            justify-content-md-center
                            justify-content-lg-center
                            justify-content-xl-center
                          "
                        >
                          <div class="text-white p-2 flex-fill text-center">
                            <object
                              data="/images/backend2.svg"
                              width="60"
                              height="60"
                            ></object>
                            <h5>Backend</h5>
                            <p>Java, NodeJS, Python</p>
                          </div>

                          <div class="text-white p-2 flex-fill text-center">
                            <object
                              data="/images/frontend.svg"
                              width="60"
                              height="60"
                            ></object>
                            <h5>Frontend</h5>
                            <p>HTML5, CSS, Angular, React JS, Bootstrap</p>
                          </div>

                          <div class="text-white p-2 flex-fill text-center">
                            <object
                              data="/images/mobile.svg"
                              width="60"
                              height="60"
                            ></object>
                            <h5>Mobile</h5>
                            <p>iOS, Android, Ionic, React Native</p>
                          </div>

                          <div class="text-white p-2 flex-fill text-center">
                            <object
                              data="/images/infra.svg"
                              width="60"
                              height="60"
                            ></object>
                            <h5>Infrastructure</h5>
                            <p>AWS, Google Cloud, Firebase, Oracle, Mysql</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      p-4
                      col-12
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                  >
                    <div
                      id="clients"
                      class="
                        w-100
                        container-fluid
                        d-flex
                        justify-content-center
                      "
                    >
                      <div
                        class="
                          w-75
                          d-flex
                          flex-column
                          align-items-center align-items-md-start
                        "
                      >
                        <div class="w-100">
                          <h3
                            class="
                              text-center
                              text-md-left
                              text-lg-left
                              text-xl-left
                              text-white
                            "
                          >
                            Our Clients
                          </h3>
                        </div>
                        <div class="underscore_logistic"></div>
                        <div
                          class="
                            d-flex
                            px-0 px-md-4 px-lg-4
                            w-100
                            row
                            justify-content-between
                            justify-content-md-center
                            justify-content-lg-center
                            justify-content-xl-center
                          "
                        >
                          <!-- <a
                            class="
                              col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3
                              my-4
                              px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4
                            "
                            target="_blank"
                            href="https://www.heinlein.com.ar/"
                            ><div class="client10"></div
                          ></a>
                          <a
                            class="
                              col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3
                              my-4
                              px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4
                            "
                            target="_blank"
                            href="http://www.calicosa.com.ar/"
                            ><div class="client11"></div
                          ></a> -->
                          <a
                            class="
                              col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3
                              my-4
                              px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4
                            "
                            target="_blank"
                            href="https://www.evergreen-marine.com//"
                            ><div class="img-container">
                                <img class="img-client" src="~/assets/evergreen-white.png" alt="">
                                </div
                          ></a>
                           <a
                            class="
                              col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3
                              my-4
                              px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4
                            "
                            target="_blank"
                            href="https://www.evergreen-marine.com//"
                            ><div class="img-container">
                                <img class="img-client" src="~/assets/calico-white.png" alt="">
                                </div
                          ></a>
                           <a
                            class="
                              col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3
                              my-4
                              px-0 px-sm-1 px-md-2 px-lg-4 px-xl-4
                            "
                            target="_blank"
                            href="https://www.evergreen-marine.com//"
                            ><div class="img-container">
                                <img class="img-client" src="~/assets/maritima-white.png" alt="">
                                </div
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <img class="w-100" src=/images/curve-footer.svg alt />
    <footer id="contacto" class="bg-darker px-2">
      <div class="d-flex justify-content-center px-4 mx-lg-5 px-lg-5 mx-3">
        <div class="w-100 row">
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">Our Offices</span>
            </h5>
            <div class="py-4">
              <span class="text-white" style="font-size: 0.9em">
                CABA, Argentina (HQ)</span
              >
              <br />
              <span class="text-white" style="font-size: 0.9em"
                >Posadas, Misiones (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em"
                >San Salvador de Jujuy, Argentina (DC)</span
              ><br />
              <span class="text-white" style="font-size: 0.9em"
                >Washington DC, USA (CO)</span
              >
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">Contact</span>
            </h5>
            <div class="py-4">
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=541140263809&text=Hi%20I%20want%20to%20contact%20you"
                >
                    <div class="d-flex flex-column flex-md-column flex-lg-row flex-xl-row ">
                        <div>
                        <span
                            class="text-white"
                            style="font-size: 0.9em"
                            >Buenos Aires HQ:</span
                        >
                        </div>
                        <div>
                            <span
                            class="text-white pl-1"
                            style="font-size: 0.9em"
                            > +54 11 4026 3809
                            </span >
                            <img
                            class="img img-fluid"
                            src="/images/whatsapp.svg"
                            alt="whatsapp indusoftware"
                            style="width: 18px"
                        />
                        </div>
                    </div>
                </a>
              </div>
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=17035894236&text=Hi%20I%20want%20to%20contact%20you"
                >
                    <div class="d-flex flex-column flex-md-column flex-lg-row flex-xl-row ">
                        <div>
                        <span class="text-white" style="font-size: 0.9em">
                            Washington Office: 
                        </span >
                        </div>
                        <div>
                            <span class="pl-1 text-white" style="font-size: 0.9em">
                                +1 703 589 4236
                            </span>
                            <img
                                class="img img-fluid"
                                src="/images/whatsapp.svg"
                                alt="whatsapp indusoftware"
                                style="width: 18px"
                            />
                        </div>
                    </div>
                </a>
              </div>
              <div>
                <img src="" alt="" /><span
                  class="text-white"
                  style="font-size: 0.9em"
                  ><a href="mailto:contacto@induSoftware.com.ar" class="text-white">contacto@induSoftware.com.ar</a></span
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <h5 class="text-white">
              <span class="subtitle-bar pb-1">Follow Us</span>
            </h5>
            <div class="py-4">
              <a
                href="https://www.instagram.com/indusoftwareok/"
                target="_blank"
                ><img
                  class="img img-fluid"
                  src="/images/instagram.svg"
                  alt="instagram indusoftware"
                  style="width: 25px"
              /></a>
              <a
                href="https://www.linkedin.com/company/indusoftware/"
                target="_blank"
                ><img
                  class="img img-fluid"
                  src="/images/linkedin.svg"
                  alt="linkedin indusoftware"
                  style="width: 25px"
              /></a>
            </div>
          </div>
          <div
            class="
              col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3
              text-center text-lg-left text-xl-left
            "
          >
            <img
              class="py-4 img-fluid"
              src="/images/logoIndu.png"
              alt="logo indusoftware"
            />
          </div>
        </div>
      </div>
      <div class="bg-foot2 text-center text-white p-3" style="font-size: small">
        &copy; 2014-2022 InduSoftware | All rights reserved.
      </div>
    </footer>
    <!-- FOOTER -->
  </div>
</template>

<script>
import bikeImg from 'assets/contenedores.jpg'
export default {
  head() {
    return {
      script: [
        {
          src: '//js.hs-scripts.com/8219400.js',
        },
      ],
      title: 'induSoftware | Logistics',
    }
  },
  data() {
    return {
      image: {
        backgroundImage: `url(${bikeImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
      },
    }
  },
  mounted() {
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms).forEach(function (form) {
      form.addEventListener(
        'submit',
        function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        },
        false
      )
    })
  },
}
</script>
