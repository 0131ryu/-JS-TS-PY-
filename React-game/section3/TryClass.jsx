import React, { PureComponent } from "react";

class TryClass extends PureComponent {
  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

// export default TryClass;

// import React, { PureComponent } from "react";

// class TryClass extends PureComponent {
//   constructor(props) {
//     super(props);
//     const filtered = this.props.filtered(() => {});
//     state = {
//       result: this.props.result,
//       try: this.props.try,
//     };
//   }
//   render() {
//     const { tryInfo } = this.props;
//     return (
//       <li>
//         <div>{tryInfo.try}</div>
//         <div>{tryInfo.result}</div>
//       </li>
//     );
//   }
// }

// export default TryClass;
