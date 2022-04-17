import React from "react";
import { ILangs } from "../../../interfaces/lang";

const items = [
  {
    id: 1,
    titleVN: "Học theo lộ trình, có định hướng",
    titleENG: "Learning according to the route, have direction",
    contentVN:
      "Terra Nova sẽ định hướng và đưa ra các lộ trình học lập trình nhằm phát triển năng lực và niềm đam mê lập trình của bạn để có việc ngay sau học.",
    contentENG:
      "Terra Nova will orient and offer programming learning paths to develop your programming competence and passion for a job right after school.",
    icon: "fa-solid fa-route",
  },
  {
    id: 2,
    titleVN: "Nền tảng, tư duy, cốt lõi trong lập trình",
    titleENG: "Foundation, thinking, core in programming",
    contentVN:
      "Terra Nova cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.",
    contentENG:
      "Terra Nova provides the most core thinking foundations and values ​​in programming. You will be confident in the change of technology and working environment",
    icon: "fa-solid fa-horse-head",
  },
  {
    id: 3,
    titleVN: "Mài giũa bạn qua kinh nghiệm, dự án thực tế",
    titleENG: "Sharpen you through experience, real projects",
    contentVN:
      "Đội ngũ Giảng viên và các Mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm 'máu lửa' cho bạn.",
    contentENG:
      "The team of Instructors and Mentors who are seasoned with real-life projects at large companies will impart their 'bloody' experience to you.",
    icon: "fa-brands fa-gripfire",
  },
  {
    id: 4,
    titleVN: "Teamwork, Scrum - Agile. Mentor tận tâm",
    titleENG: "Teamwork, Scrum - Agile. Dedicated Mentor",
    contentVN:
      "Bạn sẽ được giao dự án và làm theo Teamwork ngay từ ngày đầu tiên. Đóng vai trò một thành viên trong qui trình Scrum, Agile. Được Mentor hỗ trợ tân tâm, nhiệt tình.",
    contentENG:
      "You will be assigned projects and follow Teamwork from day one. Play the role of a member in the Scrum, Agile process. Supported by Mentor wholeheartedly and enthusiastically.",
    icon: "fa-solid fa-user-group",
  },
  {
    id: 5,
    titleVN: "Công nghệ mới, chuyên sâu, thực tế",
    titleENG: "New technology, depth, reality",
    contentVN:
      "Bạn được học và trải nghiệm các công nghệ lập trình mới nhất, chuyên sâu, bám sát nhu cầu tuyển dụng thực tế từ doanh nghiệp.",
    contentENG:
      "You can learn and experience the latest, in-depth programming technologies, closely following the actual recruitment needs from businesses.",
    icon: "fa-solid fa-qrcode",
  },
  {
    id: 6,
    titleVN: "Trao tay chìa khóa thành công toàn diện",
    titleENG: "Handing over the key to all-round success",
    contentVN:
      "Hướng dẫn viết CV, phỏng vấn. Kết nối doanh nghiệp, gặp gỡ doanh nghiệp, phỏng vấn cùng doanh nghiệp ngay sau khi tốt nghiệp.",
    contentENG:
      "Guidelines for writing CVs and interviews. Connect businesses, meet businesses, interview with businesses right after graduation.",
    icon: "fa-solid fa-handshake",
  },
];

interface CourseBenefitsProps {
  langs: ILangs;
}

const CourseBenefits: React.FunctionComponent<CourseBenefitsProps> = (
  props
) => {
  const { langs } = props;
  return (
    <div className="course-home__benefits">
      <div className="benefits__wrapper">
        <h3 className="wrapper__title">{langs?.course.home.benefits.title}</h3>
        <div className="wrapper__list">
          {items.map((i) => {
            return (
              <div className="list__item">
                <div className="item__icon">
                  <span className="icon__inner">
                    <i className={i.icon}></i>
                    <div className="inner__backdrop"></div>
                  </span>
                  <span className="icon__line"></span>
                </div>
                
                <div className="item__content">
                  <h3 className="content__title">{i.titleENG}</h3>
                  <p className="content__text">{i.contentENG}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseBenefits;
