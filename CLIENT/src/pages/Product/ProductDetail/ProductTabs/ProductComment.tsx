import React from "react";
import utils from "../../../../utils";

const ProductComment: React.FunctionComponent<{}> = (props) => {
  const data = [
    {
      id: 1,
      avatar: "../img/avatar.png",
      account: "admin",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa corrupti sunt ipsum necessitatibus, quod temporibus dolorum voluptatem beatae quaerat nam obcaecati recusandae aliquam nostrum, id, laboriosam tempora? Atque voluptas ipsam quam voluptatibus optio dolorum exercitationem laborum voluptates nihil libero. Cupiditate dolor ut, impedit dolore ea dolorum aliquam dolorem veniam.",
    },
    {
      id: 2,
      avatar: "../img/avatar.png",
      account: "admin",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa corrupti sunt ipsum necessitatibus, quod temporibus dolorum voluptatem beatae quaerat nam obcaecati recusandae aliquam nostrum, id, laboriosam tempora? Atque voluptas ipsam quam voluptatibus optio dolorum exercitationem laborum voluptates nihil libero. Cupiditate dolor ut, impedit dolore ea dolorum aliquam dolorem veniam.",
    },
    {
      id: 3,
      avatar: "../img/avatar.png",
      account: "admin",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsa corrupti sunt ipsum necessitatibus, quod temporibus dolorum voluptatem beatae quaerat nam obcaecati recusandae aliquam nostrum, id, laboriosam tempora? Atque voluptas ipsam quam voluptatibus optio dolorum exercitationem laborum voluptates nihil libero. Cupiditate dolor ut, impedit dolore ea dolorum aliquam dolorem veniam.",
    },
  ];

  return (
    <div className="inner__comment">
      {data.map((comment) => {
        return (
          <div key={utils.uuid()} className="comment__item">
            <div className="item__title">
              <div className="title__img">
                <img src={comment.avatar} alt={comment.account} />
                <p>{comment.account}</p>
              </div>
              <div className="title__icon">
              <i className="fa-solid fa-thumbs-up"></i>
              <i className="fa-solid fa-thumbs-down"></i>
              </div>
            </div>
            <div className="item__content">
              <p>{comment.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductComment;
