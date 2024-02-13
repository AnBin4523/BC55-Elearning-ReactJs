import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import CountUp from "react-countup";

export default function Number() {
  return (
    <div className="count-up  py-10">
      <div className="px-12">
        <AnimationOnScroll animateOnce={true} animateIn="animate__bounceIn">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1">
            <div className="content">
              <div>
                <img
                  src="https://demo2.cybersoft.edu.vn/static/media/003-students.e1a7c67b.png"
                  alt="logo"
                />
              </div>
              <div>
                <CountUp
                  end={9000}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={200}
                  duration={5}
                />
              </div>
              <p>Học viên</p>
            </div>
            <div className="content">
              <div>
                <img
                  src="	https://demo2.cybersoft.edu.vn/static/media/001-timetable.0e009173.png"
                  alt="logo"
                />
              </div>
              <div>
                <CountUp
                  end={1000}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={200}
                  duration={5}
                />
              </div>
              <p>Khóa học</p>
            </div>
            <div className="content">
              <div>
                <img
                  src="https://demo2.cybersoft.edu.vn/static/media/002-hourglass.548810be.png"
                  alt="logo"
                />
              </div>
              <div>
                <CountUp
                  end={33200}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={200}
                  duration={5}
                />
              </div>
              <p>Giờ học</p>
            </div>
            <div className="content">
              <div>
                <img
                  src="https://demo2.cybersoft.edu.vn/static/media/004-teacher.5bbd6eec.png"
                  alt="logo"
                />
              </div>
              <div>
                <CountUp
                  end={400}
                  scrollSpyOnce
                  enableScrollSpy
                  scrollSpyDelay={200}
                  duration={5}
                />
              </div>
              <p>Giảng viên</p>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  );
}
