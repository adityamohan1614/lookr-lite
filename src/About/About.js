import React from 'react';


//import Content from '../Content';

class About extends React.Component {
  componentDidMount() {
          fetch('http://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then((data) => {
            this.setState({ contacts: data })
          })
          .catch(console.log)
        }


   render() {
      return (

      <div className="about">
      About
     </div>

   );
   };
};
export default About;
