import React from "react";
import * as Card from "../../../../components/Card";
import * as FormControl from "../../../../components/Fields";
import { ILangs } from "../../../../interfaces/lang";
import { IUser } from "../../../../models/User";

interface StudentFieldsProps {
  langs: ILangs;
  userList: IUser[];
  students: any;
  setStudents: React.Dispatch<React.SetStateAction<any>>;
}

const StudentFields: React.FunctionComponent<StudentFieldsProps> = (props) => {
  const { langs, userList, students, setStudents } = props;

  const [users, setUsers] = React.useState<any>([]);
  const [studentSelected, setStudentSelected] = React.useState<string>();
  const [studentList, setStudentList] = React.useState<any>([]);

  React.useEffect(() => {
    if (userList) {
      let newArr = userList.map((i) => {
        return { label: i.account, value: i.id };
      });
      setUsers(newArr);
    }
  }, [userList]);

  React.useEffect(() => {
    if (students.length > 0) {
      let newStudent = users.find((i: any) => i.value === studentSelected);
      let studentArr = [...studentList];
      studentArr.push(newStudent);
      setStudentList(studentArr);
    }
  }, [students]);

  const handleAdd = (v: any) => {
    setStudentSelected(v);
    let ids = [...students];
    ids.push(v);
    setStudents(ids);
  };

  return (
    <Card.Wrapper className="item__inner item__student">
      <h3 className="inner__title">{langs?.admin.course.subTitle_8}</h3>
      <FormControl.SelectCustom
        placeholder=" "
        id="value"
        name="label"
        isPaging={true}
        option={users}
        value={users.find((i: any) => i.value === studentSelected)}
        onChange={(value: any) => {
          handleAdd(value);
        }}
      />

      {studentList.length > 0 && (
        <div className="inner__list">
          <h4 className="list__title">Student list</h4>
          {studentList.map((i: any, index: number) => {
            return (
              <Card.Wrapper className="list__card" key={index}>
                <div className="card__inner">
                  <div className="inner__content">
                    <p>{i.label}</p>
                  </div>
                  <div className="inner__close">
                    <i className="fa fa-times"></i>
                  </div>
                </div>
              </Card.Wrapper>
            );
          })}
        </div>
      )}
    </Card.Wrapper>
  );
};

export default StudentFields;
