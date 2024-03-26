import React from "react";

class TestComp extends React.Component { 
  constructor(props) { 
    super(props);

    this.state = { num: 0 }
  }

  componentDidMount() { 
    console.log('componentDidMount');

    this.setState({ num: 1 });
  }
  componentDidUpdate() { 
    console.log('componentDidUpdate');
  }
  componentWillUnmount() { 
    console.log('componentWillUnmount');
  }
  
  render() { 
    return (
      <div>
        Test Component
      </div>
    );
  }
}

export default TestComp;