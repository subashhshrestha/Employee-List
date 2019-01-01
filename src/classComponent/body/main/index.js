import React from "react";
import "./main.css";
import Form from "../../../functionalComponent/body/form/index";
import Head from "../../../functionalComponent/header/index";
import EmployeeList from "../main/employeelist";
import DeleteUser from "../../../functionalComponent/body/deleteUser/deleteuser";
import Drop from "../../../functionalComponent/dropDown/dropdown";
class Main extends React.Component {
  constructor() {
    super();
    this.changeShow = this.changeShow.bind(this);
    this.getFormData = this.getFormData.bind(this);
    this.deleteButtonShow = this.deleteButtonShow.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.onname = this.onname.bind(this);
    this.onsalary = this.onsalary.bind(this);
  }
  state = {
    show: false,
    button: false,
    arr: [
      {
        name: "Sujil",
        address: "Sallaghari",
        salary: 15000
      },
      {
        name: "Subash",
        address: "Sallaghari",
        salary: 5000
      },
      {
        name: "Shyam",
        address: "Sallaghari",
        salary: 6000
      }
    ]
  };

  changeShow() {
    this.setState({
      show: !this.state.show
    });
  }
  deleteButtonShow() {
    this.setState({
      button: !this.state.button
    });
  }
  getFormData(e) {
    e.preventDefault();

    this.setState({
      //  employee:{
      //      name:e.target.name.value,
      //      address:e.target.address.value,
      //      salary:e.target.salary.value

      //  },
      arr: [
        ...this.state.arr,
        {
          name: e.target.name.value,
          address: e.target.address.value,
          salary: e.target.salary.value
        }
      ],
      show: false
    });
  }
  deleteUser(i) {
    let employeeArr = [...this.state.arr];
    let newArr = employeeArr.filter((employee, index) => index !== i);
    this.setState({ arr: newArr });
  }
  onname() {
    console.log("Name");
    let newarr = this.state.arr.slice();
    let sortarr = newarr.sort((a, b) => {
      if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortarr);
    this.setState({ arr: newarr });
  }
  onsalary() {
    console.log("Salary");
    let newarr = this.state.arr.slice();
    let sortarr = newarr.sort((a, b) => {
      if (Number(a.salary) > Number(b.salary)) {
        return 1;
      } else {
        return -1;
      }
    });
    console.log(sortarr);
    this.setState({ arr: newarr });
  }
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12  col-md-4 pull-right">
          <div className="form-background">
            <div className="row">
              <Head
                changeShow={this.changeShow}
                deleteButtonShow={this.deleteButtonShow}
              />
            </div>
            <div className="row">
              {this.state.show ? <Form getFormData={this.getFormData} /> : ""}
            </div>
          </div>
          >
        </div>
        <div className="col-xs-12 col-sm-12 col-md-8 pull-left">
          <div className="list-background">
            <h2 style={{ color: "rgb(52, 195, 214)" }}>List of Employee</h2>
            <div className="row">
              <div className="offset-xs-11 col-xs-1 col-sm-2">
                <Drop onname={this.onname} onsalary={this.onsalary} />
              </div>
              <div className="col-xs-12 col-sm-10">
                <table align="center" style={{ color: "rgb(52, 195, 214)" }}>
                  <tbody>
                    <tr>
                      <th style={{ width: "150px", textAlign: "center" }}>
                        Name
                      </th>
                      <th style={{ width: "150px", textAlign: "center" }}>
                        Address
                      </th>
                      <th style={{ width: "150px", textAlign: "center" }}>
                        Salary
                      </th>
                    </tr>
                    {this.state.arr.map((data, i) => {
                      return (
                        <tr>
                          <td height="50">{data.name}</td>
                          <td height="50">{data.address}</td>
                          <td height="50">{data.salary}</td>
                          <td height="50">
                            {this.state.button ? (
                              <DeleteUser
                                deleteUser={this.deleteUser}
                                index={i}
                              />
                            ) : (
                              ""
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
