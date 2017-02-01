import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  codeBlock: {
    backgroundColor: '#f3f2f2',
    padding: '1px 10px',
    margin: '10px 0',
  }
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to reacted.io</h1>
        <p>
          This will become a react UI component library.
        </p>
        <p>Currently testing out storybook as way to produce documentation</p>
      </div>
    );
  }
}
