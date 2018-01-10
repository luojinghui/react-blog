/**
 * Created Date: 2017/12/22
 * Author: luojinghui
 */
import React from 'react';

const JNEctryLoading = ({isLoading, error, timedOut=10000}) => {
  // Handle the loading state
  if (isLoading) {
    return <div style={{
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: "rbga(0,0,0,0.5)"
    }}>
      <span style={{color: "#e94708", fontSize: "22px"}}>loading...</span>
    </div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else if (timedOut) {
    return <div>timedOut a long time...</div>;
  }
  else {
    return null;
  }
};

export default JNEctryLoading;