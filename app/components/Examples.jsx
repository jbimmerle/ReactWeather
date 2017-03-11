var React = require('react');
var { Link } = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <h3>Examples Component!</h3>
//         <p>Welcome to the examples page</p>
//       </div>
//     );
//   }
// });

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Mount Kisco'>Mount Kisco, NY</Link>
        </li>
        <li>
          <Link to='/?location=Sao Paulo'>Sao Paulo, Brazil</Link>
        </li>
      </ol>
    </div>
  );
}

module.exports = Examples;
