import React from "react";
import "./Testimonial.css";
function TestimonialBox() {
  return (
    <>
      <section class="client_section layout_padding">
        <div class="container ">
          <div class="heading_container heading_center">
            <h2>What says our clients</h2>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt=""></img>
                  </div>
                  <div class="detail-box">
                    <h4>Minim Veniam</h4>
                    <p>
                      Architecto nihil accusantium ab porro rem minima aliquid
                      vel nulla delectus natus necessitatibus corrupti, ipsam
                      maiores at quas officiis dolores deleniti numquam aperiam
                      maxime. Pariatur minima adipisci unde quisquam cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt=""></img>
                  </div>
                  <div class="detail-box">
                    <h4>Minim Veniam</h4>
                    <p>
                      Architecto nihil accusantium ab porro rem minima aliquid
                      vel nulla delectus natus necessitatibus corrupti, ipsam
                      maiores at quas officiis dolores deleniti numquam aperiam
                      maxime. Pariatur minima adipisci unde quisquam cumque!
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item ">
                <div class="box">
                  <div class="img-box">
                    <img src="images/client.png" alt=""></img>
                  </div>
                  <div class="detail-box">
                    <h4>Minim Veniam</h4>
                    <p>
                      Architecto nihil accusantium ab porro rem minima aliquid
                      vel nulla delectus natus necessitatibus corrupti, ipsam
                      maiores at quas officiis dolores deleniti numquam aperiam
                      maxime. Pariatur minima adipisci unde quisquam cumque!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel_btn-box">
              <a
                class="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <i class="fa fa-angle-left" aria-hidden="true"></i>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialBox;
