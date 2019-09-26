import React from 'react';

class Content extends React.Component {
    render() {
       return (
        <div id="about">
           <p className="hidden"> {this.props.name} </p>
            <p>{this.props.para}</p>
      </div>
   );
};
};
export default Content;
