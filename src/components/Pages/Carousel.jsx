import { Card, Carousel as CarouselB } from 'react-bootstrap';
import { Cards } from './Cards';
import "./carousel.css"

export function Carousel() {
    return (
        <>
            <div className='pt-5'>
                <CarouselB >
                    <CarouselB.Item interval={5000}>
                        <img
                            className="d-block w-100"
                            src="public/images/overseas-banner.png"
                            alt="First slide"
                        />
                        <CarouselB.Caption>
                            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </CarouselB.Caption>
                    </CarouselB.Item>
                    <CarouselB.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src="public/images/career.png"
                            alt="Second slide"
                        />
                        <CarouselB.Caption>
                            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </CarouselB.Caption>
                    </CarouselB.Item>
                    <CarouselB.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="public/images/resume-banner.png"
                    alt="Third slide"
                />
                {/* <CarouselB.Caption>
                    <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                </CarouselB.Caption> */}
            </CarouselB.Item>
                </CarouselB>

            </div>

        </>
    );
}